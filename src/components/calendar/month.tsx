import {
  DateContainer,
  SCalendarContainer,
  SDateRow,
  SDaysContainer,
} from "@/styles/Calendar";
import { ReactElement, useEffect, useState } from "react";
import useCalendar from "src/hooks/useCalendar";
import { IDatesProps, TDates, TRow } from "src/types/calendar";

export const Days = () => {
  const dayOfTheWeek = ["MON", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <SDaysContainer>
      {dayOfTheWeek.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </SDaysContainer>
  );
};

export const DateList: React.FC<IDatesProps> = ({ dates }) => {
  return (
    <div>
      {dates.map((row: TRow) => (
        <SDateRow>
          {row.map((date) => (
            <DateContainer>{date !== 0 ? date : ""}</DateContainer>
          ))}
        </SDateRow>
      ))}
    </div>
  );
};

export default function MonthlyCalendar() {
  const { dateArr, handleMonthBtn } = useCalendar();

  return (
    <section>
      <header>
        <button>&lt;</button>
        <span>JANUARY</span>
        <button>&gt;</button>
      </header>
      <div>
        <Days />
        <DateList dates={dateArr} />
      </div>
    </section>
  );
}
