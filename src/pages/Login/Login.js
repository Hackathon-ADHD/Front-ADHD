import React from "react";
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

const Login = () => {
  return (
    <LoginWrapper>
      <LoginLeft>
        <LogoWrapper>
          <Logo>로고 설정 후 삽입 예정</Logo>
        </LogoWrapper>
        <LoginButtonWrapper>
          <SocialLoginButton>
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
