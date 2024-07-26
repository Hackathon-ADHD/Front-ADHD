import styled, { css } from "styled-components";

export const CalendarContainer = styled.div`
  width: 80%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const YearText = styled.span`
  font-size: 13px;
`;

export const MonthText = styled.span`
  margin-left: 30px;
`;

export const NavigationContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

export const MonthNavigationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 10px;
`;

export const WeekRow = styled.div`
  display: flex;
`;

export const DayCell = styled.div`
  width: 14.28%;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  ${({ isCurrentMonth }) => css`
    color: ${isCurrentMonth ? "#000" : "#ccc"};
  `}
  ${({ isToday }) =>
    isToday &&
    css`
      background-color: #add8e6;
    `}
  ${({ isPastDate }) =>
    isPastDate &&
    css`
      cursor: pointer;
    `}
`;
