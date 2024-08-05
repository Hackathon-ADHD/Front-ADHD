import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const OneYearAgoToday = () => {
  const [diaries, setDiaries] = useState([]);
  const [analysis, setAnalysis] = useState([]);

  useEffect(() => {
    const fetchDiariesAndAnalysis = async () => {
      try {
        const response = await axios.get(
          "http://52.78.121.130:8080/api/diary/last-year"
        );
        const fetchedDiaries = response.data.body.data;

        setDiaries(fetchedDiaries);

        const analysisPromises = fetchedDiaries.map((diary) =>
          getAnalysisByDiaryId(diary.id)
        );
        const analysisResults = await Promise.all(analysisPromises);
        setAnalysis(analysisResults.flat());
      } catch (error) {
        console.error("Error fetching diaries and analysis", error);
      }
    };

    fetchDiariesAndAnalysis();
  }, []);

  return (
    <Container>
      <h1>1년 전 나의 오늘</h1>
      <DiaryContainer>
        {diaries.map((diary) => (
          <DiaryEntry key={diary.id}>
            <h2>{diary.date}</h2>
            <p>{diary.content}</p>
            <p>Emotion: {diary.emotion}</p>
            {analysis
              .filter((a) => a.diaryId === diary.id)
              .map((a) => (
                <AnalysisEntry key={a.id}>
                  <p>{a.analyzedContents}</p>
                  <p>Recommended Song: {a.recommendSongs}</p>
                </AnalysisEntry>
              ))}
          </DiaryEntry>
        ))}
      </DiaryContainer>
    </Container>
  );
};

const getAnalysisByDiaryId = async (diaryId) => {
  try {
    const response = await axios.get(
      `http://52.78.121.130:8080/api/diary/analysis/${diaryId}`
    );
    return response.data.body.data;
  } catch (error) {
    console.error(`Error fetching analysis for diary ${diaryId}`, error);
    return [];
  }
};

export default OneYearAgoToday;

const Container = styled.div`
  padding: 20px;
`;

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DiaryEntry = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AnalysisEntry = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid #eee;
`;
