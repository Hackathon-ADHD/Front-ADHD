import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleAuthRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const authorizationCode = params.get("code");

    if (authorizationCode) {
      const tokenEndpoint = "https://oauth2.googleapis.com/token";
      const data = {
        code: authorizationCode,
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        client_secret: process.env.REACT_APP_GOOGLE_PW,
        redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
        grant_type: "authorization_code",
      };

      axios
        .post(tokenEndpoint, data)
        .then((response) => {
          const accessToken = response.data.access_token;
          const idToken = response.data.id_token;

          localStorage.setItem("googleAccessToken", accessToken);
          localStorage.setItem("googleIdToken", idToken);

          navigate("/signupnickname");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location.search, navigate]);

  return <div>회원가입 진행중...</div>;
};

export default GoogleAuthRedirect;
