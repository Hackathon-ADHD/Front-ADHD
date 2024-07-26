import React from "react";
import { format, isSameMonth, isSameDay, isAfter, endOfDay } from "date-fns";
import * as S from "./CalendarStyle";
import useCalendar from "../../hooks/useCalendar";

const Calendar = ({ handleDateClick }) => {
  const { weekCalendarList, currentDate, goToPreviousMonth, goToNextMonth } =
    useCalendar();

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        {format(currentDate, "yyyy")} {format(currentDate, "M월")}
        <div style={{ display: "flex" }}>
          <S.MonthNavigationButton onClick={goToPreviousMonth}>
            {"<"}
          </S.MonthNavigationButton>
          <S.MonthNavigationButton onClick={goToNextMonth}>
            {">"}
          </S.MonthNavigationButton>
        </div>
      </S.CalendarHeader>

      {weekCalendarList.map((week, weekIndex) => (
        <div key={weekIndex} style={{ display: "flex" }}>
          {week.map((day, dayIndex) => {
            const isCurrentMonth = isSameMonth(day, currentDate);
            const isPastDate = isAfter(endOfDay(new Date()), day);
            const handleClick = isPastDate
              ? () => handleDateClick(day)
              : undefined;
            return (
              <div
                key={dayIndex}
                onClick={handleClick}
                style={{
                  width: "14.28%",
                  padding: "10px",
                  boxSizing: "border-box",
                  textAlign: "center",
                  color: isCurrentMonth ? "#000" : "#ccc",
                  backgroundColor:
                    isCurrentMonth && isSameDay(day, new Date())
                      ? "#ADD8E6"
                      : "transparent",
                  cursor: isPastDate ? "pointer" : "default",
                }}
              >
                {day.getDate()}
              </div>
            );
          })}
        </div>
      ))}
    </S.CalendarContainer>
  );
};

export default Calendar;
