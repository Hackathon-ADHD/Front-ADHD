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

export const SideBarButtonWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: auto;
  padding-bottom: 20px;
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
