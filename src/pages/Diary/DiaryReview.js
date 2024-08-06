import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userProfileState } from "../../recoils/atoms/userAtom";
import { getEmotionByType } from "../../utils/emotionSelector";
import { useLocation, useNavigate } from "react-router-dom";
import Airpod from "../../assets/images/airpod.png";
import SpinArrow from "../../assets/images/spinArrow.png";
import axiosInstance from "../../services/axiosInstance";
import * as S from "./DiaryReviewStyle";

const Review = (props) => {
  const userProfile = useRecoilValue(userProfileState);
  const [isSongRecommendationOpen, setIsSongRecommendationOpen] =
    useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    diaryFeedback = props.diaryFeedback,
    songRecommendation = props.songRecommendation,
    dateType = props.dateType,
    characterImg = props.characterImg,
    selectedDate,
    diaryText,
  } = location.state || {};

  const emotionMapping = {
    "기분 좋아": "HAPPY",
    신나: "EXCITED",
    놀라워: "CURIOUS",
    슬퍼: "SAD",
    사랑이야: "LOVE",
    궁금해: "CURIOUS",
    "마음에 안들어": "DISAPPOINTED",
    아파: "HURT",
    "역시 멋져": "IMPRESSED",
    화나: "ANGRY",
    어질어질해: "DIZZY",
    그냥: "SOSO",
  };

  const handleButtonClick = async () => {
    if (props.showHomeButton) {
      navigate("/");
    } else {
      if (props.setIsAnalysisViewOpen) {
        props.setIsAnalysisViewOpen(false);
      }

      const emotion = emotionMapping[characterImg.name] || characterImg.name;

      const diaryData = {
        content: diaryText,
        analyzedContents: diaryFeedback,
        recommendSongs: songRecommendation,
        emotion,
        date: selectedDate,
      };

      console.log("Sending diary data to server:", diaryData);

      try {
        await axiosInstance.post("/api/diary", diaryData);
        navigate("/");
      } catch (error) {
        console.error("Error saving diary data:", error);
      }
    }
  };

  const renderSongRecommendations = (recommendation) => {
    if (!recommendation) return null;
    return recommendation
      .split("\n")
      .map((song, index) => <p key={index}>{song}</p>);
  };

  return (
    <S.ReviewWrapper>
      <S.FeedbackContainer>
        <S.FeedbackText>
          {diaryFeedback ? (
            <S.FlexBetween style={{ flexDirection: "column" }}>
              <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
                {userProfile.name ? userProfile.name : "아무개"}님의 하루는
              </p>
              <p>{diaryFeedback}</p>
              <p style={{ fontWeight: "bolder" }}>“수고했어 오늘도”</p>
            </S.FlexBetween>
          ) : (
            <p>분석된 피드백을 불러오는 중입니다...</p>
          )}
        </S.FeedbackText>
      </S.FeedbackContainer>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <S.CharacterImage
            src={getEmotionByType(characterImg)}
            alt="Character"
          />
          <S.AirpodImage src={Airpod} alt="airpod" />
          {!isSongRecommendationOpen ? (
            <div style={{ display: "flex" }}>
              <S.SpinArrowImage src={SpinArrow} alt="spinArrow" />
              <S.RecommendationText
                onClick={() => setIsSongRecommendationOpen(true)}
              >
                Click <br />
                오늘의 추천 노래
              </S.RecommendationText>
            </div>
          ) : (
            <S.FlexCenter style={{ flexDirection: "column" }}>
              <S.SongRecommendationContainer>
                <S.SongRecommendationText>
                  {songRecommendation ? (
                    <S.FlexBetween style={{ flexDirection: "column" }}>
                      <p style={{ fontWeight: "bolder" }}>
                        이런 노래 어떠세요?
                      </p>
                      {renderSongRecommendations(songRecommendation)}
                    </S.FlexBetween>
                  ) : (
                    <p>추천 음악을 불러오는 중입니다...</p>
                  )}
                </S.SongRecommendationText>
              </S.SongRecommendationContainer>
              <S.HomeButton onClick={handleButtonClick}>
                {props.showHomeButton ? "홈으로 돌아가기" : "저장하기"}
              </S.HomeButton>
            </S.FlexCenter>
          )}
        </div>
      </div>
    </S.ReviewWrapper>
  );
};

export default Review;
