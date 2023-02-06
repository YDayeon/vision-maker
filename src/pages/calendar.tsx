import MonthlyCalendar from 'src/components/calendar/month';
import tw from 'twin.macro';

const CalendarPageContainer = tw.main`
  px-10
  py-10
`;

export default function CalendarPage() {
  return (
    <CalendarPageContainer>
      <MonthlyCalendar />
    </CalendarPageContainer>
  );
}
