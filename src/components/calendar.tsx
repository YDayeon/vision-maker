import { SCalendarContainer } from "@/styles/Calendar";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarApp() {
  const [selectedDate, setSelectedDate] = useState<Date>();

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  return (
    <SCalendarContainer>
      <Calendar
        locale="en-GB"
        onChange={setSelectedDate}
        value={selectedDate}
      />
    </SCalendarContainer>
  );
}
