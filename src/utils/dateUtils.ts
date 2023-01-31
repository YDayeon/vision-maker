import { TGetFirstDateFunc, TGetLastDateFunc } from "src/types/calendar";

export const getLastDateOfMonth: TGetLastDateFunc = (year, month) => {
  const lastDate = new Date(year, month, 0);
  return lastDate.getDate();
};
export const getFirstDayOfMonth: TGetFirstDateFunc = (
  year: number,
  month: number
) => {
  const firstDay = new Date(year, month, 1).getDay();
  return firstDay;
};
