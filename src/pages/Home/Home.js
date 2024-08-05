import React, { useEffect, useState } from "react";
import * as S from "./HomeStyle";
import Calendar from "../../components/Calendar/Calendar";
import DiaryContent from "../../components/DiaryContents/DiaryContent";
import { getAllDiaries, getDiariesByDate } from "../../datas/diaryDatas";
import { formatDate } from "../../utils/formatter";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [diaryEntries, setDiaryEntries] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(formatDate(date));
  };

  // 임의의 새로운 일기 항목 추가 (테스트 용도)

  useEffect(() => {
    if (!diaryEntries) {
      getAllDiaries().then((res) => setDiaryEntries(res));
    } else {
      getDiariesByDate(selectedDate).then((res) => {
        setDiaryEntries(res);
      });
    }
  }, [selectedDate]);

  return (
    <S.HomeContainer>
      <S.MainWrapper>
        <Calendar handleDateClick={handleDateClick} />

        {diaryEntries?.map((entry, index) => (
          <DiaryContent key={index} entry={entry} />
        ))}
      </S.MainWrapper>
    </S.HomeContainer>
  );
};

export default Home;
