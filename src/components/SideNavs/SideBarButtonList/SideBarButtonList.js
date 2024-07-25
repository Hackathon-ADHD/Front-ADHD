import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaRegFileAlt, FaRegUser, FaUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RiNotification2Line, RiNotification2Fill } from "react-icons/ri";
import { PiChatsTeardrop, PiChatsTeardropFill } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import SideBarButton from "../SideBarButton";
import * as S from "./SideBarButtonListStyle";

const SideBarButtonList = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <S.ButtonWrapper>
      <SideBarButton
        defaultIcon={<FiHome />}
        hoveredIcon={<GoHomeFill />}
        onClick={handleClickHome}
      >
        Home
      </SideBarButton>

      <SideBarButton defaultIcon={<FaRegFileAlt />} hoveredIcon={<FaFileAlt />}>
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
  );
};

export default SideBarButtonList;
