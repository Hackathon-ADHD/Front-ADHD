import React from "react";
// import { useNavigate } from "react-router-dom";
import * as S from "./HomeStyle";
import Calendar from "../../components/Calendar/Calendar";

const Home = () => {
  // const navigate = useNavigate();

  const handleDateClick = (date) => {
    console.log("Clicked date:", date);
    // 이곳에 필요한 클릭 이벤트 동작 추가
  };

  return (
    <S.HomeContainer>
      <S.MainWrapper>
        <Calendar handleDateClick={handleDateClick} />
        <S.DiaryContainer>
          <p>일기</p>
        </S.DiaryContainer>
      </S.MainWrapper>
    </S.HomeContainer>
  );
};

export default Home;
