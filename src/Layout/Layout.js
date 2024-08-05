import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ProfileHeader from "../components/SideNavs/ProfileHeader/ProfileHeader";
import SideBarButtonList from "../components/SideNavs/SideBarButtonList/SideBarButtonList";
import { isLoggedInState, loginTokenState } from "../recoils/atoms/loginState";
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
  const tokenState = useRecoilValue(loginTokenState);
  const [resetHomeClick, setResetHomeClick] = useState(null);

  const handleClickSignup = () => {
    navigate("/login");
  };

  return (
    <LayoutWrapper>
      <SideBar>
        <ProfileHeader resetHomeClick={resetHomeClick} />
        <SideBarButtonWrapper>
          <SideBarButtonList setResetHomeClick={setResetHomeClick} />
        </SideBarButtonWrapper>
        {!tokenState && (
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
