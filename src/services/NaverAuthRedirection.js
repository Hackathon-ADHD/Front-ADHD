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

    console.log("Authorization Code:", authorizationCode);
    console.log("State:", state);

    if (authorizationCode) {
      const tokenEndpoint = "https://nid.naver.com/oauth2.0/token";
      const data = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.REACT_APP_NAVER_CLIENT_ID,
        client_secret: process.env.REACT_APP_NAVER_CLIENT_PW,
        code: authorizationCode,
        state: state,
      });

      axios
        .post(tokenEndpoint, data, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          const accessToken = response.data.access_token;

          console.log("Access Token:", accessToken);

          localStorage.setItem("naverAccessToken", accessToken);

          navigate("/signup");
        })
        .catch((error) => {
          console.log(
            "Error:",
            error.response ? error.response.data : error.message
          );
        });
    }
  }, [location.search, navigate]);

  return <div>회원가입 진행중...</div>;
};

export default NaverAuthRedirect;
