import styled from 'styled-components';
import tw from 'twin.macro';

export const SMain = tw.main`
  w-screen
  h-screen
`;

export const SFormContainer = tw.div`
  w-full
  h-full
  flex
  justify-center
  items-center
`;

export const SFrom = styled.form`
  ${tw`
  w-[38rem]
  h-[90%]
  px-5
  bg-slate-800
  text-white
  flex
  flex-col
  justify-around
  `}
  div {
    ${tw`w-full`}
    h3 {
      ${tw`text-center`}
    }
    textarea,
    input {
      ${tw`w-full`}
    }
  }
`;
