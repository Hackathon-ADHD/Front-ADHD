import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { kakaoLogin } from "../apis/diary";

const KakaoAuthRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(1);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const authorizationCode = params.get("code");
    console.log(authorizationCode);

    if (authorizationCode) {
      kakaoLogin(authorizationCode)
        .then(({ accessToken, refreshToken, email, newMember }) => {
          console.log(accessToken);
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
  }, [navigate]);

  return <div>회원가입 진행중...</div>;
};

export default KakaoAuthRedirect;
