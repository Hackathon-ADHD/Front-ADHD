import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaRegFileAlt, FaRegUser, FaUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RiNotification2Line, RiNotification2Fill } from "react-icons/ri";
import { PiChatsTeardrop, PiChatsTeardropFill } from "react-icons/pi";
import {
  BsFileEarmarkBarGraph,
  BsFileEarmarkBarGraphFill,
} from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import SideBarButton from "../SideBarButton/SideBarButton";
import * as S from "./SideBarButtonListStyle";

const SideBarButtonList = ({ setResetHomeClick }) => {
  const navigate = useNavigate();
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleButtonClick = (index, onClick) => {
    setClickedIndex(index);
    if (onClick) {
      onClick();
    }
  };

  const resetClickedIndex = () => setClickedIndex(null);

  useEffect(() => {
    setResetHomeClick(() => resetClickedIndex());
  }, [setResetHomeClick]);

  return (
    <S.ButtonWrapper>
      <SideBarButton
        defaultIcon={<FiHome />}
        hoveredIcon={<GoHomeFill />}
        isClicked={clickedIndex === 0}
        onClick={() => {
          handleButtonClick(0, () => {
            resetClickedIndex();
            navigate("/");
          });
        }}
      >
        Home
      </SideBarButton>
      <SideBarButton
        defaultIcon={<FaRegFileAlt />}
        hoveredIcon={<FaFileAlt />}
        isClicked={clickedIndex === 1}
        onClick={() => handleButtonClick(1, () => navigate("diary"))}
      >
        일기 작성하기
      </SideBarButton>
      <SideBarButton
        defaultIcon={<BsFileEarmarkBarGraph />}
        hoveredIcon={<BsFileEarmarkBarGraphFill />}
        isClicked={clickedIndex === 2}
        onClick={() => handleButtonClick(2, () => navigate("diary-graph"))}
      >
        주차별 행복 수치
      </SideBarButton>
      <SideBarButton
        defaultIcon={<PiChatsTeardrop />}
        hoveredIcon={<PiChatsTeardropFill />}
        isClicked={clickedIndex === 3}
        onClick={() => handleButtonClick(3, () => navigate("oneyearagotoday"))}
      >
        1년전 나의 오늘
      </SideBarButton>
      <SideBarButton
        defaultIcon={<RiNotification2Line />}
        hoveredIcon={<RiNotification2Fill />}
        isClicked={clickedIndex === 4}
        onClick={() => handleButtonClick(4, () => navigate("notification"))}
      >
        알림
      </SideBarButton>
      <SideBarButton
        defaultIcon={<FaRegUser />}
        hoveredIcon={<FaUser />}
        isClicked={clickedIndex === 5}
        onClick={() => handleButtonClick(5, null)}
      >
        My Page
      </SideBarButton>
    </S.ButtonWrapper>
  );
};

export default SideBarButtonList;
