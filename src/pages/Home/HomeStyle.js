import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  max-height: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #d8ebf2;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const CalendarContainer = styled.div`
  width: 80%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;
