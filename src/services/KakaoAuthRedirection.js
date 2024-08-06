import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { kakaoLogin } from "./apis/kakao";

const KakaoAuthRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const authorizationCode = params.get("code");

    if (authorizationCode) {
      kakaoLogin(authorizationCode)
        .then(({ accessToken, refreshToken, email, newMember }) => {
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
          console.error("Error:", error.message);
        });
    }
  }, [location.search, navigate]);

  return <div>회원가입 진행중...</div>;
};

export default KakaoAuthRedirect;
