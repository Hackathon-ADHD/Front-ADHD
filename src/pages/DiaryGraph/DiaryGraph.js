import React, { useEffect, useState } from "react";
import EmotionChart from "../../components/EmotionChart/EmotionChart";
import { getAllDiaries, getEmotionScores } from "../../apis/diary";
import {
  Wrapper,
  Title,
  Subtitle,
  ChartWrapper,
  MessageWrapper,
  Message,
} from "./DiaryGraphStyle";

const DiaryGraph = () => {
  const [diaryDatas, setDiaryDatas] = useState(null);
  const [diaryEmotionScoreDatas, setDiaryEmotionScoreDatas] = useState(null);

  const [chartData, setChartData] = useState([]);
  const [averageScore, setAverageScore] = useState(0);
  const [averageScorePercentage, setAverageScorePercentage] = useState(0);
  const [message, setMessage] = useState("");

  const analysisChart = () => {
    const dateMap = {};

    // 2024년 데이터만 필터링
    const filteredDiaries = diaryDatas.filter((diary) =>
      diary.date.startsWith("2024")
    );

    filteredDiaries.forEach((diary) => {
      const scoreEntry = diaryEmotionScoreDatas.find(
        (score) => score.id === diary.id
      );

      if (scoreEntry) {
        const score = parseInt(scoreEntry.score, 10);
        if (dateMap[diary.date]) {
          dateMap[diary.date].totalScore += score;
          dateMap[diary.date].count += 1;
        } else {
          dateMap[diary.date] = { totalScore: score, count: 1 };
        }
      }
    });

    const averagedData = Object.keys(dateMap).map((date) => ({
      date,
      score: dateMap[date].totalScore / dateMap[date].count,
    }));

    const sampledData = averagedData;

    // 샘플링된 데이터의 평균 점수 계산
    const totalScore = averagedData.reduce(
      (sum, entry) => sum + entry.score,
      0
    );
    const average = (totalScore / averagedData.length).toFixed(2);

    // 백분율 계산 (1~12 범위 기준)
    const minScore = 1;
    const maxScore = 12;
    const averagePercentage = (
      ((totalScore / averagedData.length - minScore) / (maxScore - minScore)) *
      100
    ).toFixed(2);

    setChartData(sampledData);
    setAverageScore(average);
    setAverageScorePercentage(averagePercentage);

    // 문구 설정
    if (averagePercentage >= 50) {
      setMessage("이번 주는 좋은 한 주였어요!");
    } else {
      setMessage("이번 주는 조금 힘든 한 주였어요.");
    }
  };

  useEffect(() => {
    getAllDiaries().then((response) => {
      setDiaryDatas(response);
    });

    getEmotionScores().then((response) => {
      setDiaryEmotionScoreDatas(response);
    });
  }, []);

  useEffect(() => {
    if (diaryDatas === null || diaryEmotionScoreDatas === null) return;
    analysisChart();
  }, [diaryDatas, diaryEmotionScoreDatas]);

  return (
    <Wrapper>
      <Title>주차별 행복 수치</Title>
      <ChartWrapper>
        <EmotionChart data={chartData} />
      </ChartWrapper>
      <Subtitle>
        이번주 행복 수치는 {averageScore} 입니다 ({averageScorePercentage}%)
      </Subtitle>
      <MessageWrapper>
        <Message>{message}</Message>
      </MessageWrapper>
    </Wrapper>
  );
};

export default DiaryGraph;
