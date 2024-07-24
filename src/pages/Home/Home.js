// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegFileAlt, FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import {
  HomeContainer,
  MainWrapper,
  SideBarButtons,
  SideBarLogoNicknameWrapper,
  SideBarWrapper,
  SideBarButton,
  NicknameText,
  QuestionText,
  CalendarContainer,
  DiaryContainer,
  SignupButton,
  ButtonWrapper,
  LogoWrapper,
  NicknameWrapper,
  CalendarHeader,
  MonthNavigationButton,
} from "./HomeStyle";
import LogoImage from "../../assets/images/LogoImage.png";
import { useRecoilValue } from "recoil";
import {
  isLoggedInState,
  profileNameState,
} from "../../recoils/atoms/loginState";
import useCalendar from "../../hooks/useCalendar";
import { format, isSameMonth, isSameDay, isAfter, endOfDay } from "date-fns";

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const profileName = useRecoilValue(profileNameState);
  const { weekCalendarList, currentDate, goToPreviousMonth, goToNextMonth } =
    useCalendar();

  const handleClickSignup = () => {
    navigate("login");
  };

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleClickHome = () => {
    navigate("/");
  };

  const handleDateClick = (date) => {
    console.log("Clicked date:", date);
    // 이곳에 필요한 클릭 이벤트 동작 추가
  };

  return (
    <HomeContainer>
      <SideBarWrapper>
        <SideBarLogoNicknameWrapper>
          <LogoWrapper>
            <img src={LogoImage} alt="logo-image" onClick={handleClickLogo} />
          </LogoWrapper>
          <NicknameWrapper>
            <NicknameText>{profileName} 님</NicknameText>
            <QuestionText>오늘 하루는 어떠셨나요?</QuestionText>
          </NicknameWrapper>
        </SideBarLogoNicknameWrapper>
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
        {!isLoggedIn && (
          <SignupButton onClick={handleClickSignup}>회원가입</SignupButton>
        )}
      </SideBarWrapper>
      <MainWrapper>
        <CalendarContainer>
          <CalendarHeader>
            <span>{format(currentDate, "MMMM yyyy")}</span>
            <div style={{ display: "flex" }}>
              <MonthNavigationButton onClick={goToPreviousMonth}>
                {"<"}
              </MonthNavigationButton>
              <MonthNavigationButton onClick={goToNextMonth}>
                {">"}
              </MonthNavigationButton>
            </div>
          </CalendarHeader>

          {weekCalendarList.map((week, weekIndex) => (
            <div key={weekIndex} style={{ display: "flex" }}>
              {week.map((day, dayIndex) => {
                const isCurrentMonth = isSameMonth(day, currentDate);
                const isPastDate = isAfter(endOfDay(new Date()), day);
                const handleClick = isPastDate
                  ? () => handleDateClick(day)
                  : undefined;
                return (
                  <div
                    key={dayIndex}
                    onClick={handleClick}
                    style={{
                      width: "14.28%",
                      padding: "10px",
                      boxSizing: "border-box",
                      textAlign: "center",
                      color: isCurrentMonth ? "#000" : "#ccc",
                      backgroundColor:
                        isCurrentMonth && isSameDay(day, new Date())
                          ? "#ADD8E6"
                          : "transparent",
                      cursor: isPastDate ? "pointer" : "default",
                    }}
                  >
                    {day.getDate()}
                  </div>
                );
              })}
            </div>
          ))}
        </CalendarContainer>
        <DiaryContainer>
          <p>일기</p>
        </DiaryContainer>
      </MainWrapper>
    </HomeContainer>
  );
};

export default Home;
