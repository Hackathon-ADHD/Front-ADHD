import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
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

const Layout = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const handleClickSignup = () => {
    navigate("/login");
  };

  return (
    <LayoutWrapper>
      <SideBar>
        <ProfileHeader />
        <SideBarButtonWrapper>
          <SideBarButtonList />
        </SideBarButtonWrapper>
        {!isLoggedIn && (
          <SignupButtonWrapper>
            <SignupButton onClick={handleClickSignup}>회원가입</SignupButton>
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
