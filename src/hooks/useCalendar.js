import {
  subMonths,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { useState } from "react";

export const DEFAULT_TRASH_VALUE = 0;
const DAY_OF_WEEK = 7;

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfCurrentMonth = startOfMonth(currentDate);
  const endOfCurrentMonth = endOfMonth(currentDate);

  const startOfCalendar = startOfWeek(startOfCurrentMonth);
  const endOfCalendar = endOfWeek(endOfCurrentMonth);

  const currentCalendarList = eachDayOfInterval({
    start: startOfCalendar,
    end: endOfCalendar,
  });

  const weekCalendarList = currentCalendarList.reduce((acc, cur, idx) => {
    const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);
    return acc;
  }, []);

  const goToPreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return {
    weekCalendarList,
    currentDate,
    setCurrentDate,
    goToPreviousMonth,
    goToNextMonth,
  };
};

export default useCalendar;
