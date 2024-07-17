import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  LoginWrapper,
  LoginLeft,
  LoginRight,
  LogoWrapper,
  Logo,
  LoginButtonWrapper,
  SocialLoginButton,
  AnimationWrapper,
} from "./LoginStyle";
import googleSigninButton from "../../assets/images/google_signin_button.png";
import kakaoSigninButton from "../../assets/images/kakao_signin_button.png";
import naverSigninButton from "../../assets/images/naver_signin_button.png";
const SCOPE =
  "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&response_type=code&scope=${SCOPE}`;
    window.location.href = googleAuthUrl;
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const authorizationCode = params.get("code");

    if (authorizationCode) {
      setLoggedIn(true);
      navigate("/signupnickname");
    }
  }, [location.search, navigate]);

  return (
    <LoginWrapper>
      <LoginLeft>
        <LogoWrapper>
          <Logo>로고 설정 후 삽입 예정</Logo>
        </LogoWrapper>
        <LoginButtonWrapper>
          <SocialLoginButton
            className="google_login_button"
            onClick={handleGoogleLogin}
          >
            <img src={googleSigninButton} alt="google-login" />
          </SocialLoginButton>
          <SocialLoginButton className="kakao_login_button">
            <img src={kakaoSigninButton} alt="kakao-login" />
          </SocialLoginButton>
          <SocialLoginButton className="naver_login_button">
            <img src={naverSigninButton} alt="naver-login" />
          </SocialLoginButton>
        </LoginButtonWrapper>
      </LoginLeft>
      <LoginRight>
        <AnimationWrapper>
          여기 애들이 병 속에 들어있는 애니메이션 넣을 예정
        </AnimationWrapper>
      </LoginRight>
    </LoginWrapper>
  );
};

export default Login;
