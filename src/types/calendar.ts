export interface IPriority {
  priority?: string;
}

export type TDates = number[][];
export type TRow = number[];

export interface IDatesProps {
  dates: TDates;
}

export type TGetLastDateFunc = (year: number, month: number) => number;

export type TGetFirstDateFunc = (year: number, month: number) => number;
