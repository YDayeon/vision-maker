import { TDates, TGetFirstDateFunc } from 'src/types/calendar';
import { TGetLastDateFunc } from './../types/calendar';
import { useEffect, useState } from 'react';
import { getFirstDayOfMonth, getLastDateOfMonth } from 'src/utils/dateUtils';

export type TArgMonth = 'prev' | 'next';

export default function useCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [monthName, setMonthName] = useState('');
  const [dateArr, setDateArr] = useState<TDates>();

  const handleMonthBtn = (arg: TArgMonth) => {
    let resultDate = new Date(year, month);
    if (arg === 'prev') {
      let prevDate = new Date(resultDate.setMonth(resultDate.getMonth() - 1));
      setMonth(prevDate.getMonth());
      setYear(prevDate.getFullYear());
    }
    if (arg === 'next') {
      let nextDate = new Date(resultDate.setDate(resultDate.getMonth() + 1));
      setMonth(nextDate.getMonth() + 1);
      setYear(nextDate.getFullYear());
    }
  };

  useEffect(() => {
    setMonthName(
      new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
        new Date(year, month)
      )
    );
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
  }, [month, year]);

  return { dateArr, monthName, handleMonthBtn };
}
