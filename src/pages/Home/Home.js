import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./HomeStyle";
import Calendar from "../../components/Calendar/Calendar";
import DiaryContent from "../../components/DiaryContents/DiaryContent";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [diaryId, setDiaryId] = useState(null);

  const handleDateClick = async (date) => {
    console.log("Clicked date:", date);
    setSelectedDate(date);

    // 여기서 날짜에 해당하는 diaryId를 백엔드에서 가져옵니다.
    // try {
    //   const response = await axios.get(
    //     `YOUR_BACKEND_API_URL/api/diary/date/${date.toISOString()}`
    //   );
    //   const id = response.data.body.data.id;
    //   setDiaryId(id);
    // } catch (error) {
    //   console.error("해당 날짜의 일기 ID를 가져오는 중 에러 발생:", error);
    // }
  };

  return (
    <S.HomeContainer>
      <S.MainWrapper>
        <Calendar handleDateClick={handleDateClick} />
        {<DiaryContent diaryId={diaryId} />}
      </S.MainWrapper>
    </S.HomeContainer>
  );
};

export default Home;
