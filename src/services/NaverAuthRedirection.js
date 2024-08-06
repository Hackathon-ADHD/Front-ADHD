import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NaverAuthRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const authorizationCode = params.get("code");
    const state = params.get("state");

    if (authorizationCode && state) {
      const backendEndpoint = `http://52.78.121.130:8080/login/naver?code=${authorizationCode}&state=${state}`;

      axios
        .get(backendEndpoint)
        .then((response) => {
          const accessToken = response.data.body.data?.accessToken;
          const refreshToken = response.data.body.data?.accessToken;
          const email = response.data.body.data?.accessToken;

          localStorage.setItem("naverAccessToken", accessToken);
          localStorage.setItem("naverRefreshToken", refreshToken);
          localStorage.setItem("naverEmail", email);

          navigate("/signup");
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

export default NaverAuthRedirect;
