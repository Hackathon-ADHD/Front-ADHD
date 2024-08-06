import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { naverLogin } from "./apis/naver";

const NaverAuthRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const authorizationCode = params.get("code");

    if (authorizationCode) {
      naverLogin(authorizationCode)
        .then(({ accessToken, refreshToken, email, newMember }) => {
          localStorage.setItem("naverAccessToken", accessToken);
          localStorage.setItem("naverRefreshToken", refreshToken);
          localStorage.setItem("naverEmail", email);

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

export default NaverAuthRedirect;
