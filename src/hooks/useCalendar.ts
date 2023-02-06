import { TDates, TGetFirstDateFunc } from 'src/types/calendar';
import { TGetLastDateFunc } from './../types/calendar';
import { useEffect, useState } from 'react';
import { getFirstDayOfMonth, getLastDateOfMonth } from 'src/utils/dateUtils';

export type TArgMonth = 'prev' | 'next';

export default function useCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [dateArr, setDateArr] = useState<TDates>();

  const handleMonthBtn = (arg: TArgMonth) => {
    console.log(arg);
    let resultDate = new Date(year, month);
    if (arg === 'prev') {
      let prevMonth = resultDate.setMonth(resultDate.getMonth() - 1);
      setMonth(prevMonth);
      if (resultDate.getMonth() - 1 < 0) {
        let prevYear = resultDate.setFullYear(resultDate.getFullYear() - 1);
        setYear(prevYear);
      }
    } else if (arg === 'next') {
      let nextMonth = new Date(
        resultDate.setMonth(resultDate.getMonth() + 1)
      ).getMonth();
      nextMonth === 0 ? setMonth(12) : setMonth(nextMonth);
      console.log(month);
      if (resultDate.getMonth() === 0) {
        let nextYear = resultDate.setFullYear(resultDate.getFullYear() + 1);
        setYear(nextYear);
      }
    }
  };

  useEffect(() => {
    let dayNo = getFirstDayOfMonth(2023, month);
    let weekNo = 0;
    let arr = new Array(6).fill(0).map(() => new Array(7).fill(0));
    for (let i = 0; i < getLastDateOfMonth(2023, month + 1); i++) {
      dayNo !== 0 ? (arr[weekNo][dayNo - 1] = i + 1) : (arr[weekNo][6] = i + 1);
      if (dayNo === 0) {
        weekNo++;
        dayNo++;
      } else if (dayNo === 6) {
        dayNo = 0;
      } else {
        dayNo++;
      }
    }
    if (arr[5][0] === 0) arr.pop();
    setDateArr(arr);
  }, []);

  return { dateArr, handleMonthBtn };
}
