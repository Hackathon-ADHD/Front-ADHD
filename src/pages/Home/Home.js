import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegFileAlt, FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";

import {
  HomeContainer,
  MainWrapper,
  SideBarButtons,
  SideBarNickname,
  SideBarWrapper,
  SideBarButton,
  NicknameText,
  QuestionText,
  CalendarContainer,
  DiaryContainer,
  SignupButton,
  ButtonWrapper,
} from "./HomeStyle";

const Home = () => {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("login");
  };

  return (
    <HomeContainer>
      <SideBarWrapper>
        <SideBarNickname>
          <NicknameText>닉네임 님</NicknameText>
          <QuestionText>오늘 하루는 어떠셨나요?</QuestionText>
        </SideBarNickname>
        <SideBarButtons>
          <ButtonWrapper>
            <SideBarButton onClick={handleClickHome}>
              <FiHome />
              <span>Home</span>
            </SideBarButton>
            <SideBarButton>
              <FaRegFileAlt />
              <span>일기 작성하기</span>
            </SideBarButton>
            <SideBarButton>
              <GrNotification />
              <span>알림</span>
            </SideBarButton>
            <SideBarButton>
              <FaRegUser />
              <span>My page</span>
            </SideBarButton>
          </ButtonWrapper>
        </SideBarButtons>
        <SignupButton onClick={handleClickHome}>회원가입</SignupButton>
      </SideBarWrapper>
      <MainWrapper>
        <CalendarContainer>
          <p>달력</p>
        </CalendarContainer>
        <DiaryContainer>
          <p>일기</p>
        </DiaryContainer>
      </MainWrapper>
    </HomeContainer>
  );
};

export default Home;
