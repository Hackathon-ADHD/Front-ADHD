import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
`;

export const SideBarWrapper = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
  border-right: 1px solid #ccc;
  padding-top: 20px;

  @media (max-width: 768px) {
    width: 25%;
  }
`;

export const MainWrapper = styled.div`
  width: 75%;
  height: 100%;
  background-color: #d8ebf2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const SideBarLogoNicknameWrapper = styled.div`
  width: 100%;
  height: 30%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  color: black;
  border-bottom: 1px solid #ccc;
`;

export const LogoWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
  }
`;

export const NicknameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const NicknameText = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const QuestionText = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 5px;
`;

export const SideBarButtons = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: auto;
  padding-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SideBarButton = styled.div`
  width: 80%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 2px solid transparent;
  transition: background-color 0.3s, border 0.3s, color 0.3s;

  &:hover {
    background-color: #e9ecef;
    border-radius: 30px;
    font-weight: 700;
    color: black;
  }

  svg {
    margin-right: 20px;
  }

  span {
    font-size: 1rem;
  }
`;

export const CalendarContainer = styled.div`
  width: 80%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const DiaryContainer = styled.div`
  width: 80%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SignupButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px auto 0;
  margin-bottom: 30px;

  &:hover {
    background-color: #333;
  }
`;
