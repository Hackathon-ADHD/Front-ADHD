import styled, { css } from "styled-components";

export const CalendarContainer = styled.div`
  width: 80%;
  height: 100%;
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
  font-size: 16px;
`;

export const MonthText = styled.span`
  margin-left: 10px;
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
  padding: 30px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  ${({ iscurrentmonth }) => css`
    color: ${iscurrentmonth ? "#000" : "#ccc"};
  `}
  ${({ isselected }) =>
    isselected &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        background-color: #add8e6;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      }
    `}
  ${({ ispastdate }) =>
    ispastdate &&
    css`
      cursor: pointer;
    `}
`;

export const DayText = styled.div`
  position: relative;
  z-index: 2;
`;
