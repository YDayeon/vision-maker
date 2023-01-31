import { IPriority } from "src/types/calendar";
import styled from "styled-components";
import tw from "twin.macro";

export const SContainer = styled.div``;
export const SHeader = styled.header<IPriority>(({ priority }) => [
  tw`w-full h-10 bg-red-500 rounded-t-2xl`,
  priority === "high"
    ? tw`bg-red-500`
    : priority === "medium"
    ? tw`bg-amber-400`
    : priority === "low"
    ? tw`bg-emerald-500`
    : tw`accent-blue-300`,
]);

export const SFormcontainer = styled.div`
  ${tw`bg-slate-200
  p-2
  rounded-b-xl`}
`;
