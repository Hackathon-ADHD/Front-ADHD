import React, { useState, useEffect } from "react";
import { format, isSameMonth, isSameDay, isAfter, endOfDay } from "date-fns";
import axiosInstance from "../../services/axiosInstance";
import * as S from "./CalendarStyle";
import useCalendar from "../../hooks/useCalendar";
import { getEmotionByType } from "../../utils/emotionSelector";

const Calendar = ({ handleDateClick }) => {
    const { weekCalendarList, currentDate, goToPreviousMonth, goToNextMonth } = useCalendar();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [diaryData, setDiaryData] = useState([]);

    useEffect(() => {
        setSelectedDate(new Date());

        // 서버에서 데이터 가져오기
        const fetchDiaryData = async () => {
            try {
                const response = await axiosInstance.get("/api/diary/dates");
                setDiaryData(response.data.body.data);
            } catch (error) {
                console.error("Error fetching diary data:", error);
            }
        };

        fetchDiaryData();
    }, []);

    const onDateClick = (day) => {
        setSelectedDate(day);
        handleDateClick(day);
    };

    const getEmotionForDate = (date) => {
        const diaryEntry = diaryData.find((entry) => isSameDay(new Date(entry.date), date));
        return diaryEntry ? getEmotionByType(diaryEntry.emotion) : null;
    };

    return (
        <S.CalendarContainer>
            <S.CalendarHeader>
                <S.YearText>{format(currentDate, "yyyy")}</S.YearText>
                <S.MonthText>{format(currentDate, "M월")}</S.MonthText>
                <S.NavigationContainer>
                    <S.MonthNavigationButton onClick={goToPreviousMonth}>{"<"}</S.MonthNavigationButton>
                    <S.MonthNavigationButton onClick={goToNextMonth}>{">"}</S.MonthNavigationButton>
                </S.NavigationContainer>
            </S.CalendarHeader>

            {weekCalendarList.map((week, weekIndex) => (
                <S.WeekRow key={weekIndex}>
                    {week.map((day, dayIndex) => {
                        const isCurrentMonth = isSameMonth(day, currentDate);
                        const isPastDate = isAfter(endOfDay(new Date()), day);
                        const handleClick = isPastDate ? () => onDateClick(day) : undefined;
                        const isSelected = isSameDay(day, selectedDate);
                        const emotionImage = getEmotionForDate(day);
                        return (
                            <S.DayCell
                                key={dayIndex}
                                onClick={handleClick}
                                iscurrentmonth={isCurrentMonth ? "true" : undefined}
                                isselected={isSelected ? "true" : undefined}
                                ispastdate={isPastDate ? "true" : undefined}
                            >
                                <S.DayText hide={emotionImage}>{day.getDate()}</S.DayText>
                                {emotionImage && <S.EmotionImage src={emotionImage} alt="" />}
                            </S.DayCell>
                        );
                    })}
                </S.WeekRow>
            ))}
        </S.CalendarContainer>
    );
};

export default Calendar;
