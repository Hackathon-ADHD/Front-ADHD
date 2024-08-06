import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LoginWrapper,
  LoginLeft,
  LoginRight,
  LoginTextWrapper,
  LoginLogoWrapper,
  LoginButtonWrapper,
  SocialLoginButton,
  LoginText,
} from "./LoginStyle";

import kakaoSigninButton from "../../assets/images/kakao_login_image.png";
import naverSigninButton from "../../assets/images/naver_login_image.png";
import loginLogo from "../../assets/images/LoginLogoImage.png";
import { useTypingAnime } from "../../components/TypingTextAnimation";
import { GlobalStyle } from "../../assets/styles/globalStyle";

const STATE = "test";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  // const handleNaverLogin = () => {
  //   const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`;
  //   window.location.href = naverAuthUrl;
  // };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const authorizationCode = params.get("code");

    if (authorizationCode) {
      navigate("/signup");
    }
  }, [location.search, navigate]);

  const { animeFinishFlag: firstFlag, TypingTextDiv: FirstText } =
    useTypingAnime("오늘 하루도", 100);
  const { animeFinishFlag: secondFlag, TypingTextDiv: SecondText } =
    useTypingAnime("수고했을 당신에게", 100, firstFlag);
  const { TypingTextDiv: ThirdText } = useTypingAnime(
    "전하는 마음",
    100,
    secondFlag
  );

  return (
    <>
      <GlobalStyle />
      <LoginWrapper>
        <LoginLeft>
          <LoginTextWrapper>
            <LoginText>
              <FirstText />
              <SecondText />
              <ThirdText />
            </LoginText>
          </LoginTextWrapper>
          <LoginButtonWrapper>
            <SocialLoginButton
              className="kakao_login_button"
              onClick={handleKakaoLogin}
            >
              <img src={kakaoSigninButton} alt="kakao-login" />
            </SocialLoginButton>
            <SocialLoginButton className="naver_login_button">
              <img src={naverSigninButton} alt="naver-login" />
            </SocialLoginButton>
          </LoginButtonWrapper>
        </LoginLeft>
        <LoginRight>
          <LoginLogoWrapper>
            <img src={loginLogo} alt="login-logo" />
          </LoginLogoWrapper>
        </LoginRight>
      </LoginWrapper>
    </>
  );
};

export default Login;
