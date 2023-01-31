import { TDates, TGetFirstDateFunc } from "src/types/calendar";
import { TGetLastDateFunc } from "./../types/calendar";
import { useEffect, useState } from "react";
import { getFirstDayOfMonth, getLastDateOfMonth } from "src/utils/dateUtils";

export default function useCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  let dayNo = getFirstDayOfMonth(2023, month);
  let weekNo = 0;
  let dateArr: TDates = new Array(6).fill(0).map(() => new Array(7).fill(0));

  const handleMonthBtn = (arg: string) => {
    let resultDate = new Date(year, month);
    if (arg === "prev") {
      let prevMonth = resultDate.setMonth(resultDate.getMonth() - 1);
      setMonth(prevMonth);
      if (resultDate.getMonth() - 1 < 0) {
        let prevYear = resultDate.setFullYear(resultDate.getFullYear() - 1);
        setYear(prevYear);
      }
    } else if (arg === "next") {
      let prevMonth = resultDate.setMonth(resultDate.getMonth() + 1);
      setMonth(prevMonth);
      if (resultDate.getMonth() === 0) {
        let nextYear = resultDate.setFullYear(resultDate.getFullYear() + 1);
        setYear(nextYear);
      }
    }
  };

  useEffect(() => {
    // let dateNo = 1;
    // dateArr.map((row) =>
    //   row.map((date, i) => {
    //     console.log(i, dayNo);
    //     if (i === dayNo) {
    //       date = dateNo;
    //     }
    //     dateNo++;
    //   })
    // );
  }, []);
  for (let i = 0; i < getLastDateOfMonth(2023, month + 1); i++) {
    dayNo !== 0
      ? (dateArr[weekNo][dayNo - 1] = i + 1)
      : (dateArr[weekNo][6] = i + 1);
    if (dayNo === 0) {
      weekNo++;
      dayNo++;
    } else if (dayNo === 6) {
      dayNo = 0;
    } else {
      dayNo++;
    }
  }

  if (dateArr[5][0] === 0) dateArr.pop();

  return { dateArr, handleMonthBtn };
}
