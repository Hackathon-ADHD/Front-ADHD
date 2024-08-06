import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ProfileHeader from "../components/SideNavs/ProfileHeader/ProfileHeader";
import SideBarButtonList from "../components/SideNavs/SideBarButtonList/SideBarButtonList";
import { isLoggedInState } from "../recoils/atoms/loginState";
import {
    LayoutWrapper,
    MainWrapper,
    SideBar,
    SideBarButtonWrapper,
    SignupButtonWrapper,
    SignupButton,
} from "./LayoutStyle";
import { tokenState } from "../recoils/atoms/authAtoms";
import axios from "axios";

const Layout = () => {
    const navigate = useNavigate();
    const [resetHomeClick, setResetHomeClick] = useState(null);
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);
    const setToken = useSetRecoilState(tokenState);
    const isLoggedIn = useRecoilValue(isLoggedInState);

    const handleClickSignup = () => {
        navigate("/login");
    };
    const handleClickLogout = async () => {
        const storedToken = localStorage.getItem("kakaoAccessToken");
        if (storedToken) {
            setToken(storedToken);
            setIsLoggedIn(true);

            try {
                const response = await axios.post(
                    "https://soogo.ba-ro.co.kr/api/logout",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${storedToken}`,
                        },
                    }
                );

                localStorage.removeItem("kakaoAccessToken");
                setToken(null);
                setIsLoggedIn(false);
                navigate("login");
            } catch (error) {
                console.error("Error during logout:", error);
            }
        }
    };
    useEffect(() => {
        const storedToken = localStorage.getItem("kakaoAccessToken");
        if (storedToken) {
            setToken(storedToken);
            setIsLoggedIn(true);
        }
    }, [setToken, setIsLoggedIn]);

    return (
        <LayoutWrapper>
            <SideBar>
                <ProfileHeader resetHomeClick={resetHomeClick} />
                <SideBarButtonWrapper>
                    <SideBarButtonList setResetHomeClick={setResetHomeClick} />
                </SideBarButtonWrapper>
                {!isLoggedIn ? (
                    <SignupButtonWrapper>
                        <SignupButton onClick={handleClickSignup}>회원가입</SignupButton>
                    </SignupButtonWrapper>
                ) : (
                    <SignupButtonWrapper>
                        <SignupButton onClick={handleClickLogout}>로그아웃</SignupButton>
                    </SignupButtonWrapper>
                )}
            </SideBar>
            <MainWrapper>
                <Outlet />
            </MainWrapper>
        </LayoutWrapper>
    );
};

export default Layout;
