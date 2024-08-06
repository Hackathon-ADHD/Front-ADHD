import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userProfileState } from "../../recoils/atoms/userAtom";
import { getEmotionByType } from "../../utils/emotionSelector";
import { useNavigate } from "react-router-dom";
import Airpod from "../../assets/images/airpod.png";
import SpinArrow from "../../assets/images/spinArrow.png";
import * as S from "./DiaryReviewStyle";

const Review = (props) => {
  const userProfile = useRecoilValue(userProfileState);
  const [isSongRecommendationOpen, setIsSongRecommendationOpen] =
    useState(false);
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    props.setIsAnalysisViewOpen && props.setIsAnalysisViewOpen(false);
    navigate("/");
  };

  return (
    <S.ReviewWrapper>
      <S.FeedbackContainer>
        <S.FeedbackText>
          {props.diaryFeedback ? (
            <S.FlexBetween style={{ flexDirection: "column" }}>
              <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
                {props.dateType}&nbsp;
                {userProfile ? userProfile.name : "아무개"}님의 하루는
              </p>

              <p>{props.diaryFeedback}</p>

              <p style={{ fontWeight: "bolder" }}>
                “수고했어 {props.dateType}도”
              </p>
            </S.FlexBetween>
          ) : (
            <p>분석된 피드백을 불러오는 중입니다...</p>
          )}
        </S.FeedbackText>
      </S.FeedbackContainer>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <S.CharacterImage
            src={getEmotionByType(props.characterImg)}
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
                  {props.songRecommendation ? (
                    <S.FlexBetween style={{ flexDirection: "column" }}>
                      <p style={{ fontWeight: "bolder" }}>
                        이런 노래 어떠세요?
                      </p>
                      <p>{props.songRecommendation}</p>
                    </S.FlexBetween>
                  ) : (
                    <p>추천 음악을 불러오는 중입니다...</p>
                  )}
                </S.SongRecommendationText>
              </S.SongRecommendationContainer>
              <S.HomeButton onClick={handleHomeButtonClick}>
                홈으로 돌아가기
              </S.HomeButton>
            </S.FlexCenter>
          )}
        </div>
      </div>
    </S.ReviewWrapper>
  );
};

export default Review;
