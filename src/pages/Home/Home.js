import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaRegFileAlt, FaRegUser, FaUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RiNotification2Line, RiNotification2Fill } from "react-icons/ri";
import { PiChatsTeardrop, PiChatsTeardropFill } from "react-icons/pi";
import * as S from "./HomeStyle";
import LogoImage from "../../assets/images/LogoImage.png";
import { useRecoilValue } from "recoil";
import {
  isLoggedInState,
  profileNameState,
} from "../../recoils/atoms/loginState";
import { GoHomeFill } from "react-icons/go";
import SideBarButton from "../../components/SideBarButton";
import Calendar from "../../components/Calendar/Calendar";

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const profileName = useRecoilValue(profileNameState);

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
    <S.HomeContainer>
      <S.SideBarWrapper>
        <S.SideBarLogoNicknameWrapper>
          <S.LogoWrapper>
            <img src={LogoImage} alt="logo-image" onClick={handleClickLogo} />
          </S.LogoWrapper>
          <S.NicknameWrapper>
            <S.NicknameText>{profileName} 님</S.NicknameText>
            <S.QuestionText>오늘 하루는 어떠셨나요?</S.QuestionText>
          </S.NicknameWrapper>
        </S.SideBarLogoNicknameWrapper>
        <S.SideBarButtons>
          <S.ButtonWrapper>
            <SideBarButton
              defaultIcon={<FiHome />}
              hoveredIcon={<GoHomeFill />}
              onClick={handleClickHome}
            >
              Home
            </SideBarButton>

            <SideBarButton
              defaultIcon={<FaRegFileAlt />}
              hoveredIcon={<FaFileAlt />}
            >
              일기 작성하기
            </SideBarButton>

            <SideBarButton
              defaultIcon={<PiChatsTeardrop />}
              hoveredIcon={<PiChatsTeardropFill />}
            >
              1년전 나의 오늘
            </SideBarButton>

            <SideBarButton
              defaultIcon={<RiNotification2Line />}
              hoveredIcon={<RiNotification2Fill />}
            >
              알림
            </SideBarButton>

            <SideBarButton defaultIcon={<FaRegUser />} hoveredIcon={<FaUser />}>
              My Page
            </SideBarButton>
          </S.ButtonWrapper>
        </S.SideBarButtons>
        {!isLoggedIn && (
          <S.SignupButton onClick={handleClickSignup}>회원가입</S.SignupButton>
        )}
      </S.SideBarWrapper>
      <S.MainWrapper>
        <Calendar handleDateClick={handleDateClick} />{" "}
        {/* Use the Calendar component */}
        <S.DiaryContainer>
          <p>일기</p>
        </S.DiaryContainer>
      </S.MainWrapper>
    </S.HomeContainer>
  );
};

export default Home;
