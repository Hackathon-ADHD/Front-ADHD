import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import speechBubble1 from "../../assets/images/말풍선1.png";
import speechBubble2 from "../../assets/images/말풍선2.png";
import characterImg from "../../assets/images/기분 좋아.png"; // 캐릭터 이미지 경로를 적절히 변경하세요.

const ReviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    position: relative;
    height: 100vh;
`;

const FeedbackContainer = styled.div`
    margin: 20px;
    padding: 20px;
    background: url(${speechBubble1}) no-repeat center center;
    background-size: 100% 100%; /* 이미지의 가로와 세로를 각각 100%로 설정 */
    border: none;
    width: 70%; /* 가로 길이를 늘림 */
    height: 500px; /* 원래 이미지의 세로 길이를 유지 */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const FeedbackText = styled.div`
    padding: 20px;
    width: 80%;
`;

const SongRecommendationContainer = styled.div`
    margin: 20px;
    padding: 10px;
    background: url(${speechBubble2}) no-repeat center center;
    background-size: contain;
    border: none;
    width: 60%;
    height: 250px;
    position: absolute;
    left: 250px; /* 캐릭터 이미지의 오른쪽으로 이동 */
    bottom: -180px; /* 말풍선2를 더 많이 아래로 내림 */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const SongRecommendationText = styled.div`
    padding: 10px;
    width: 80%;
`;

const CharacterImage = styled.img`
    position: absolute;
    bottom: 20px;
    left: 200px;
    width: 220px;
    height: 200px;
`;

const Review = () => {
    const location = useLocation();
    const { diaryFeedback, songRecommendation } = location.state || {};

    return (
        <ReviewWrapper>
            <FeedbackContainer>
                <FeedbackText>
                    {diaryFeedback ? <p>{diaryFeedback}</p> : <p>분석된 피드백을 불러오는 중입니다...</p>}
                </FeedbackText>
            </FeedbackContainer>
            <CharacterImage src={characterImg} alt="Character" />
            <SongRecommendationContainer>
                <SongRecommendationText>
                    {songRecommendation ? <p>{songRecommendation}</p> : <p>추천 음악을 불러오는 중입니다...</p>}
                </SongRecommendationText>
            </SongRecommendationContainer>
        </ReviewWrapper>
    );
};

export default Review;
