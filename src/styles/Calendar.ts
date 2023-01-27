import styled from "styled-components";
import tw from "twin.macro";

export const SCalendarContainer = styled.div`
  .react-calendar {
    ${tw`border-none w-4/6`}
  }
  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    ${tw`hidden`}
  }
  .react-calendar__month-view__weekdays__weekday {
    ${tw`border-b border-r border-blue-300`}
    :last-child {
      ${tw`border-r-0`}
    }
    abbr {
      ${tw`no-underline`}
    }
  }
  .react-calendar__month-view__days {
    button {
      ${tw`border-b border-r border-slate-300 border-solid h-24 flex`}
    }
  }
`;
