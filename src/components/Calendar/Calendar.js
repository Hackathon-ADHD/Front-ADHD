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
        <S.YearText>{format(currentDate, "yyyy")}</S.YearText>
        <S.MonthText>{format(currentDate, "M월")}</S.MonthText>
        <S.NavigationContainer>
          <S.MonthNavigationButton onClick={goToPreviousMonth}>
            {"<"}
          </S.MonthNavigationButton>
          <S.MonthNavigationButton onClick={goToNextMonth}>
            {">"}
          </S.MonthNavigationButton>
        </S.NavigationContainer>
      </S.CalendarHeader>

      {weekCalendarList.map((week, weekIndex) => (
        <S.WeekRow key={weekIndex}>
          {week.map((day, dayIndex) => {
            const isCurrentMonth = isSameMonth(day, currentDate);
            const isPastDate = isAfter(endOfDay(new Date()), day);
            const handleClick = isPastDate
              ? () => handleDateClick(day)
              : undefined;
            return (
              <S.DayCell
                key={dayIndex}
                onClick={handleClick}
                isCurrentMonth={isCurrentMonth}
                isToday={isCurrentMonth && isSameDay(day, new Date())}
                isPastDate={isPastDate}
              >
                {day.getDate()}
              </S.DayCell>
            );
          })}
        </S.WeekRow>
      ))}
    </S.CalendarContainer>
  );
};

export default Calendar;
