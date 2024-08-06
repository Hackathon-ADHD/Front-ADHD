import React, { useEffect, useState } from "react";
import * as S from "./HomeStyle";
import Calendar from "../../components/Calendar/Calendar";
import DiaryContent from "../../components/DiaryContents/DiaryContent";
import { getDiariesByDate } from "../../utils/diaryPicker";
import { getAllDiaries } from "../../apis/diary";
import { formatDate } from "../../utils/formatter";
import Review from "../Diary/DiaryReview";
import { userProfileState } from "../../recoils/atoms/userAtom";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
  const [diaryEntries, setDiaryEntries] = useState(null);
  const [wholeDiaryEntries, setWholeDiaryEntries] = useState([]);

  const [analysis, setAnalysis] = useState([]);
  const [isAnalysisViewOpen, setIsAnalysisViewOpen] = useState(false);

  const handleDateClick = (date) => {
    setSelectedDate(formatDate(date));
    console.log(userProfileState.name);
  };

  useEffect(() => {
    if (!diaryEntries) {
      getAllDiaries().then((res) => {
        setDiaryEntries(res);
        setWholeDiaryEntries(res);
      });
    } else {
      getDiariesByDate(wholeDiaryEntries, selectedDate).then((res) => {
        setDiaryEntries(res);
      });
    }
  }, [selectedDate]);

  return isAnalysisViewOpen ? (
    <div style={{ paddingLeft: "20px" }}>
      <h1>{selectedDate}</h1>
      <Review
        diaryFeedback={analysis?.analyzedContents}
        characterImg={analysis?.emotion}
        songRecommendation={analysis?.recommendSongs}
        dateType="오늘"
        setIsAnalysisViewOpen={setIsAnalysisViewOpen}
      />
    </div>
  ) : (
    <S.HomeContainer>
      <S.MainWrapper>
        <Calendar handleDateClick={handleDateClick} />

        {diaryEntries?.map((entry, index) => (
          <DiaryContent
            key={index}
            entry={entry}
            setIsAnalysisViewOpen={setIsAnalysisViewOpen}
            setAnalysis={setAnalysis}
            setSelectedDate={setSelectedDate}
          />
        ))}
      </S.MainWrapper>
    </S.HomeContainer>
  );
};

export default Home;
