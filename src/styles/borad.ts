import styled from 'styled-components';
import tw from 'twin.macro';

export interface ITheme {
  theme: string;
}

export const SBoardContainer = tw.section`
  flex
  flex-col
  h-[90%]
  justify-between
  gap-3
  
`;
export const SBoard = styled.div<ITheme>(({ theme }) => [
  theme === 'dark'
    ? tw`bg-amber-700 text-white`
    : theme === 'light'
    ? tw`bg-orange-200`
    : tw`bg-yellow-100`,
  tw`w-96 h-1/2 rounded-xl shadow-lg px-3 py-5`,
]);
export const STitle = tw.h1`
  text-center
  text-2xl
`;
export const SHignlightBox = tw.div`
  w-full
  h-20
  bg-orange-300
  my-3
  rounded-2xl
  flex
  justify-center
  items-center
  text-xl
  cursor-grab
`;
