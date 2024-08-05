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
          const accessToken = response.data.access_token;
          const refreshToken = response.data.refresh_token;
          const email = response.data.email;

          localStorage.setItem("kakaoAccessToken", accessToken);
          localStorage.setItem("kakaoRefreshToken", refreshToken);
          localStorage.setItem("kakaoEmail", email);

          navigate("/signup");
        })
        .catch((error) => {
          console.error(
            "Error:",
            error.response ? error.response.data : error.message
          );
          // if (error.response) {
          //   console.error("Status:", error.response.status);
          //   console.error("Headers:", error.response.headers);
          // }
        });
    }
  }, [location.search, navigate]);

  return <div>회원가입 진행중...</div>;
};

export default KakaoAuthRedirect;
