import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ReviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const FeedbackContainer = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 80%;
`;

const SongRecommendationContainer = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 80%;
`;

const Review = () => {
    const location = useLocation();
    const { diaryFeedback, songRecommendation } = location.state || {};

    return (
        <ReviewWrapper>
            <h1>일기 피드백</h1>
            <FeedbackContainer>
                {diaryFeedback ? <p>{diaryFeedback}</p> : <p>분석된 피드백을 불러오는 중입니다...</p>}
            </FeedbackContainer>
            <h1>음악 추천</h1>
            <SongRecommendationContainer>
                {songRecommendation ? <p>{songRecommendation}</p> : <p>추천 음악을 불러오는 중입니다...</p>}
            </SongRecommendationContainer>
        </ReviewWrapper>
    );
};

export default Review;
