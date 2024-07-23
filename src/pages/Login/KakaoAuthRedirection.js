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
      const tokenEndpoint = "https://kauth.kakao.com/oauth/token";
      const data = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.REACT_APP_KAKAO_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
        code: authorizationCode,
      });

      axios
        .post(tokenEndpoint, data, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          const accessToken = response.data.access_token;

          localStorage.setItem("kakaoAccessToken", accessToken);

          navigate("/signup");
        })
        .catch((error) => {
          console.error(
            "Error:",
            error.response ? error.response.data : error.message
          );
          if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Headers:", error.response.headers);
          }
        });
    } else {
      console.error("No authorization code found");
    }
  }, [location.search, navigate]);

  return <div>회원가입 진행중...</div>;
};

export default KakaoAuthRedirect;
