import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
  isLoggedInState,
  profileNameState,
  loginTokenState,
} from "../recoils/atoms/loginState";

const KakaoAuthRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setProfileName = useSetRecoilState(profileNameState);
  const setLoginToken = useSetRecoilState(loginTokenState);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("kakaoAccessToken");

    if (storedAccessToken) {
      setIsLoggedIn(true);
      setLoginToken(storedAccessToken);
      navigate("/");
      return;
    }

    const params = new URLSearchParams(location.search);
    const authorizationCode = params.get("code");

    // 인증 코드가 존재하면 백엔드로 요청을 보냅니다.
    if (authorizationCode) {
      const backendPoint = `http://52.78.121.130:8080/login/kakao?code=${authorizationCode}`;

      axios
        .get(backendPoint)
        .then((response) => {
          console.log(response.data);
          const accessToken = response.data.body.data?.accessToken;
          const refreshToken = response.data.body.data?.refreshToken;
          const email = response.data.body.data?.email;

          if (accessToken) {
            localStorage.setItem("kakaoAccessToken", accessToken);
            localStorage.setItem("kakaoRefreshToken", refreshToken);
            localStorage.setItem("kakaoEmail", email);

            setIsLoggedIn(true);
            setProfileName(email);
            setLoginToken(accessToken);

            navigate("/signup");
          }
        })
        .catch((error) => {
          console.error(
            "Error:",
            error.response ? error.response.data : error.message
          );
        });
    }
  }, [location.search, navigate, setIsLoggedIn, setProfileName, setLoginToken]);

  return <div>회원가입 진행중...</div>;
};

export default KakaoAuthRedirect;
