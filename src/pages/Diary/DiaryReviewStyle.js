import styled from "styled-components";
import speechBubble1 from "../../assets/images/말풍선1.png";
import speechBubble2 from "../../assets/images/말풍선2.png";

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  min-width: 840px;
`;

export const FeedbackContainer = styled.div`
  padding: 20px;
  background: url(${speechBubble1}) no-repeat center center;
  background-size: 100% 100%;
  border: none;
  width: 70%;
  min-width: 510px;
  min-height: 250px;
  padding-bottom: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const FeedbackText = styled.div`
  padding: 20px;
  width: 80%;
  min-width: 400px;
`;

export const SongRecommendationContainer = styled.div`
  padding: 20px;
  background: url(${speechBubble2}) no-repeat center center;
  background-size: contain;
  border: none;
  width: 60%;
  min-width: 380px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 150px;
`;

export const SongRecommendationText = styled.div`
  padding: 10px;
  width: 70%;
  min-width: 337px;
`;

export const CharacterImage = styled.img`
  width: 160px;
  height: 160px;
`;

export const AirpodImage = styled.img`
  width: 150px;
  height: 115px;
  padding-top: 60px;
  padding-left: 20px;
`;

export const SpinArrowImage = styled.img`
  width: 80px;
  height: 70px;
  padding-top: 40px;
  padding-left: 10px;
`;

export const RecommendationText = styled.div`
  text-align: center;
  width: 200px;
  height: 82px;
  margin-top: 80px;
  font-weight: 400;
  font-size: 28px;
  cursor: pointer;
`;

export const HomeButton = styled.button`
  padding: 10px 16px;
  background-color: #d9d9d9;
  border: none;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`;
