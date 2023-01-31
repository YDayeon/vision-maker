import { CalendarPageContainer, CalendarPageSection } from "@/styles/Calendar";
import ManageCalendarForm from "src/components/calendar/manage-form";
import MonthlyCalendar from "src/components/calendar/month";

export default function CalendarPage() {
  return (
    <CalendarPageContainer>
      <MonthlyCalendar />
    </CalendarPageContainer>
  );
}
