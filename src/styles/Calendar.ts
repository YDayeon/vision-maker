import { IPriority } from "src/types/calendar";
import styled from "styled-components";
import tw from "twin.macro";

export const CalendarPageContainer = tw.main`
  px-10
`;
export const CalendarPageSection = tw.section`
  flex
`;

export const SDaysContainer = styled.div`
  ${tw`flex w-full bg-blue-100`}
  div {
    ${tw`w-1/7 text-center h-8`}
  }
`;
export const SDateRow = tw.div`
  flex
`;
export const DateContainer = tw.div`
  w-1/7
  h-28
 bg-blue-200
  hover:bg-blue-500
`;

export const SCalendarContainer = styled.div``;

export const CalendarManageForm = styled.form`
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
export const PriorityButton = styled.button<IPriority>(({ priority }) => [
  priority === "high"
    ? tw`bg-red-500`
    : priority === "medium"
    ? tw`bg-amber-400`
    : tw`bg-emerald-500`,
  tw`w-5 h-5 rounded-full`,
]);
