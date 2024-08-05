import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { formatDate } from "../../utils/formatter";

const OneYearAgoToday = () => {
  const [diaries, setDiaries] = useState([]);
  const [analysis, setAnalysis] = useState([]);

  useEffect(() => {
    const fetchDiariesAndAnalysis = async () => {
      const date = new Date();
      const formattedDate = formatDate(date);
      const token = localStorage.getItem("kakaoAccessToken");

      try {
        const response = await axios
          .get(
            `http://52.78.121.130:8080/api/diary/last-year?date=${formattedDate}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            console.log(response);
            const fetchedDiaries = response.data.body.data;
            setDiaries(fetchedDiaries);

            const analysisPromises = fetchedDiaries.map((diary) =>
              getAnalysisByDiaryId(diary.id)
            );
            return Promise.all(analysisPromises);
          })
          .catch((err) => {
            console.log(err);
          })
          .then((analysisResults) => {
            setAnalysis(analysisResults.flat());
          });

        console.log("Diaries response:", response);
      } catch (error) {
        console.error("Error fetching diaries and analysis", error);
      }
    };

    fetchDiariesAndAnalysis();
  }, []);

  useEffect(() => {
    console.log(diaries);
  }, [diaries]);

  return (
    <Container>
      <h1>1년 전 나의 오늘</h1>
      <DiaryContainer>
        <DiaryEntry key={diaries.id}>
          <h2>{diaries.date}</h2>
          <p>{diaries.content}</p>
          <p>Emotion: {diaries.emotion}</p>
        </DiaryEntry>
      </DiaryContainer>

      <DiaryContainer>
        <DiaryEntry key={diaries.id}>
          <AnalysisEntry key={diaries.id}>
            <p>{diaries.analyzedContents}</p>
            <p>Recommended Song: {diaries.recommendSongs}</p>
          </AnalysisEntry>
        </DiaryEntry>
      </DiaryContainer>
    </Container>
  );
};

const getAnalysisByDiaryId = async (diaryId) => {
  try {
    const response = await axios.get(`/diary/analysis/${diaryId}`);
    console.log(`Analysis for diary ${diaryId}:`, response);
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
