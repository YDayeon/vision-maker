import { SBoard, SBoardContainer, SHignlightBox, STitle } from '@/styles/borad';

function Highlight() {
  return (
    <SBoardContainer>
      <SBoard theme={'light'}>
        <STitle>HIGHLIGHT</STitle>
        <div>
          <SHignlightBox>doing side-project</SHignlightBox>
          <SHignlightBox>study flutter</SHignlightBox>
        </div>
      </SBoard>
      <SBoard theme={'dark'}>
        <STitle>Done</STitle>
      </SBoard>
    </SBoardContainer>
  );
}

export default Highlight;
