import React, { useState, useEffect } from "react";
import { format, isSameMonth, isSameDay, isAfter, endOfDay } from "date-fns";
import * as S from "./CalendarStyle";
import useCalendar from "../../hooks/useCalendar";

const Calendar = ({ handleDateClick }) => {
  const { weekCalendarList, currentDate, goToPreviousMonth, goToNextMonth } =
    useCalendar();
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const onDateClick = (day) => {
    setSelectedDate(day);
    handleDateClick(day);
  };

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
            const handleClick = isPastDate ? () => onDateClick(day) : undefined;
            const isSelected = isSameDay(day, selectedDate);
            return (
              <S.DayCell
                key={dayIndex}
                onClick={handleClick}
                isCurrentMonth={isCurrentMonth}
                isSelected={isSelected}
                isPastDate={isPastDate}
              >
                <S.DayText>{day.getDate()}</S.DayText>
              </S.DayCell>
            );
          })}
        </S.WeekRow>
      ))}
    </S.CalendarContainer>
  );
};

export default Calendar;
