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
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { tokenState } from "../../recoils/atoms/authAtoms";
import { isLoggedInState } from "../../recoils/atoms/loginState";

const STATE = "test";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const setTokenState = useSetRecoilState(tokenState);
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);

    const handleKakaoLogin = () => {
        const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
        window.location.href = kakaoAuthUrl;
    };

    const handleNaverLogin = () => {
        const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`;
        window.location.href = naverAuthUrl;
    };

    useEffect(() => {
        const fetchToken = async (code) => {
            try {
                const response = await axios.post("http://your-backend-url.com/auth/token", {
                    code,
                });
                const { token } = response.data;
                setTokenState(token); // Recoil 상태에 토큰 설정
                localStorage.setItem("token", token); // 로컬스토리지에 토큰 저장
                setIsLoggedIn(true);
                navigate("/signup"); // 회원가입 페이지로 이동
            } catch (error) {
                console.error("Error fetching token:", error);
                navigate("/404"); // 에러 시 404 페이지로 이동
            }
        };

        const params = new URLSearchParams(location.search);
        const authorizationCode = params.get("code");

        if (authorizationCode) {
            fetchToken(authorizationCode);
        }
    }, [location.search, navigate, setTokenState, setIsLoggedIn]);

    const { animeFinishFlag: firstFlag, TypingTextDiv: FirstText } = useTypingAnime("오늘 하루도", 100);
    const { animeFinishFlag: secondFlag, TypingTextDiv: SecondText } = useTypingAnime(
        "수고했을 당신에게",
        100,
        firstFlag
    );
    const { TypingTextDiv: ThirdText } = useTypingAnime("전하는 마음", 100, secondFlag);

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
                        <SocialLoginButton className="kakao_login_button" onClick={handleKakaoLogin}>
                            <img src={kakaoSigninButton} alt="kakao-login" />
                        </SocialLoginButton>
                        <SocialLoginButton className="naver_login_button" onClick={handleNaverLogin}>
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
