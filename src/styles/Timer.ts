import styled from "styled-components";
import tw from "twin.macro";
import { IClipPathProps } from "./../types/timer";

export const STimerContainer = styled.div`
  ${tw`w-[42rem] h-[42rem] bg-blue-400 flex flex-col justify-between`}
  .top {
    ${tw`w-full flex justify-center`}
  }
  .middle {
    ${tw`flex items-center justify-between`}
  }
  .bottom {
    ${tw`w-full flex justify-center`}
  }
`;

export const STimer = tw.div`
    w-[38rem]
    h-[38rem]
    bg-white
    rounded-full
    relative
    flex
    justify-center
    items-center
    overflow-hidden
    bg-orange-400
    shadow-[8px_8px_gray]
`;
export const SSpot = tw.div`
    w-12
    h-12
    z-20
    rounded-full
    bg-orange-100
    shadow-[4px_4px_gray]
`;

export const SMinuterHand = tw.div`
    w-0.5
    h-[9rem]
    bg-black
    z-10
    absolute
    left-[19rem]
    top-40
`;

export const SLeftTime = styled.div<IClipPathProps>`
  ${tw`bg-white absolute w-full h-full`}
  clip-path: polygon(${(props) => props.clipPath});
`;
