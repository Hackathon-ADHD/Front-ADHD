import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const KakaoAuthRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const authorizationCode = params.get("code");

    if (authorizationCode) {
      const backendPoint = `http://52.78.121.130:8080/login/kakao?code=${authorizationCode}`;

      axios
        .get(backendPoint)
        .then((response) => {
          console.log(response.data);
          console.log(response.data.body.data?.accessToken);
          const accessToken = response.data.body.data?.accessToken;
          const refreshToken = response.data.body.data?.refreshToken;
          const email = response.data.body.data?.email;
          const newMember = response.data.body.data?.newMember;

          console.log(response.data.body.data);

          localStorage.setItem("kakaoAccessToken", accessToken);
          localStorage.setItem("kakaoRefreshToken", refreshToken);
          localStorage.setItem("kakaoEmail", email);
          localStorage.setItem("newMember", newMember);
          if (newMember) {
            navigate("/signup");
          } else {
            navigate("/");
          }
        })
        .catch((error) => {
          console.error(
            "Error:",
            error.response ? error.response.data : error.message
          );
        });
    }
  }, [location.search, navigate]);

  return <div>회원가입 진행중...</div>;
};

export default KakaoAuthRedirect;
