import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../../recoils/atoms/loginState";
import * as S from "./HomeStyle";
import SideBarButtonList from "../../components/SideNavs/SideBarButtonList/SideBarButtonList";
import ProfileHeader from "../../components/SideNavs/ProfileHeader/ProfileHeader";
import Calendar from "../../components/Calendar/Calendar";

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const handleClickSignup = () => {
    navigate("login");
  };

  const handleDateClick = (date) => {
    console.log("Clicked date:", date);
    // 이곳에 필요한 클릭 이벤트 동작 추가
  };

  return (
    <S.HomeContainer>
      <S.SideBarWrapper>
        <ProfileHeader />
        <S.SideBarButtonWrapper>
          <SideBarButtonList />
        </S.SideBarButtonWrapper>
        {!isLoggedIn && (
          <S.SignupButton onClick={handleClickSignup}>회원가입</S.SignupButton>
        )}
      </S.SideBarWrapper>
      <S.MainWrapper>
        <Calendar handleDateClick={handleDateClick} />{" "}
        <S.DiaryContainer>
          <p>일기</p>
        </S.DiaryContainer>
      </S.MainWrapper>
    </S.HomeContainer>
  );
};

export default Home;
