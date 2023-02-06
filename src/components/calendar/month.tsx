import { ReactElement, useEffect, useState } from 'react';
import useCalendar from 'src/hooks/useCalendar';
import { IDatesProps, TDates, TRow } from 'src/types/calendar';
import { IPriority } from 'src/types/calendar';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface IParamDate {
  isToday: boolean;
  isSelect: boolean;
}

const SDaysContainer = styled.div`
  ${tw`flex w-full bg-blue-100`}
  div {
    ${tw`w-1/7 text-center h-8`}
  }
`;
const SDateRow = tw.div`
  flex
`;
const DateContainer = styled.div<IParamDate>(({ isToday, isSelect }) => [
  tw`bg-blue-200`,
  isToday && tw`bg-blue-400`,
  isSelect && tw`bg-orange-400`,
  tw`w-1/7 h-32 p-2 hover:bg-orange-300`,
]);

const SCalendarContainer = tw.section`

`;

const CalendarManageForm = styled.form`
  .button_container {
    ${tw`flex justify-end gap-0.5`}
  }
  div {
    ${tw`flex gap-1`}
  }
  footer {
    ${tw`flex justify-center`}
  }
`;
const PriorityButton = styled.button<IPriority>(({ priority }) => [
  priority === 'high'
    ? tw`bg-red-500`
    : priority === 'medium'
    ? tw`bg-amber-400`
    : tw`bg-emerald-500`,
  tw`w-5 h-5 rounded-full`,
]);

const SCalenderHeader = tw.header`
  flex
  justify-center
  gap-10
  mb-5
  text-2xl
`;

export const Days = () => {
  const dayOfTheWeek = ['MON', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <SDaysContainer>
      {dayOfTheWeek.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </SDaysContainer>
  );
};

export const DateList: React.FC<IDatesProps> = ({ dates }) => {
  const todayDate = new Date().getDate();
  const [selectedDate, setSelectedDate] = useState<Number>();

  const handleClick = (date: number) => date !== 0 && setSelectedDate(date);

  return (
    <div>
      {dates?.map((row: TRow, i) => (
        <SDateRow key={row[i] + i}>
          {row.map((date, i) => (
            <DateContainer
              onClick={() => handleClick(date)}
              key={date + i}
              isToday={todayDate === date}
              isSelect={date === selectedDate}
            >
              {date !== 0 ? date : ''}
            </DateContainer>
          ))}
        </SDateRow>
      ))}
    </div>
  );
};

export default function MonthlyCalendar() {
  const { dateArr, handleMonthBtn } = useCalendar();

  return (
    <SCalendarContainer>
      <SCalenderHeader>
        <button onClick={() => handleMonthBtn('prev')}>&lt;</button>
        <span>JANUARY</span>
        <button onClick={() => handleMonthBtn('next')}>&gt;</button>
      </SCalenderHeader>
      <div>
        <Days />
        <DateList dates={dateArr} />
      </div>
    </SCalendarContainer>
  );
}
