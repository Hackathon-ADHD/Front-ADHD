import React, { useState } from "react";
import * as S from "./HomeStyle";
import Calendar from "../../components/Calendar/Calendar";
import DiaryContent from "../../components/DiaryContents/DiaryContent";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [diaryEntries, setDiaryEntries] = useState([
    {
      date: "2024-08-04",
      content: "오늘은 기쁜 하루였다.",
      characterImage: require("../../assets/images/LogoImage.png"),
    },
    {
      date: "2024-08-03",
      content: "오늘은 평범한 하루였다.",
      characterImage: require("../../assets/images/LogoImage.png"),
    },
    {
      date: "2024-08-02",
      content: "오늘은 즐거운 하루였다.",
      characterImage: require("../../assets/images/LogoImage.png"),
    },
    {
      date: "2024-08-01",
      content: "오늘은 바쁜 하루였다.",
      characterImage: require("../../assets/images/LogoImage.png"),
    },
  ]);

  const handleDateClick = (date) => {
    console.log("Clicked date:", date);
    setSelectedDate(date);
  };

  const addDiaryEntry = (newEntry) => {
    setDiaryEntries((prevEntries) => {
      const updatedEntries = [newEntry, ...prevEntries];
      return updatedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    });
  };

  // 임의의 새로운 일기 항목 추가 (테스트 용도)
  const handleAddEntry = () => {
    const newEntry = {
      date: new Date().toISOString().split("T")[0], // 현재 날짜
      content: "새로운 일기 내용",
      characterImage: require("../../assets/images/LogoImage.png"),
    };
    addDiaryEntry(newEntry);
  };

  return (
    <S.HomeContainer>
      <S.MainWrapper>
        <Calendar handleDateClick={handleDateClick} />
        <button onClick={handleAddEntry}>새 일기 추가</button>{" "}
        {/* 테스트 용도 버튼 */}
        {diaryEntries.map((entry, index) => (
          <DiaryContent key={index} entry={entry} />
        ))}
      </S.MainWrapper>
    </S.HomeContainer>
  );
};

export default Home;
