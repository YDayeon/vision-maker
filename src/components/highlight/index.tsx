import { SBoard, SBoardContainer, SHignlightBox, STitle } from '@/styles/borad';
import useKanban from './useKanban';

function Highlight() {
  const { hightLights, doneList, handleDragStart, handleDragOver, handleDrop } =
    useKanban({
      initHightLights: mockHighLights,
      initDoneList: mockDoneList,
    });

  return (
    <SBoardContainer>
      <SBoard
        theme={'light'}
        onDrop={(e) => handleDrop(e, 'todo')}
        onDragOver={handleDragOver}
      >
        <STitle>HIGHLIGHT</STitle>
        <div>
          {hightLights?.map((highLight) => (
            <SHignlightBox
              key={highLight?.id}
              id={highLight?.id}
              onDragStart={handleDragStart}
              draggable={true}
            >
              {highLight?.title}
            </SHignlightBox>
          ))}
        </div>
      </SBoard>
      <SBoard
        theme={'dark'}
        onDrop={(e) => handleDrop(e, 'done')}
        onDragOver={handleDragOver}
      >
        <STitle>Done</STitle>
        <div>
          {doneList?.map((item) => (
            <SHignlightBox
              key={item?.id}
              id={item?.id}
              onDragStart={handleDragStart}
              draggable={true}
            >
              {item?.title}
            </SHignlightBox>
          ))}
        </div>
      </SBoard>
    </SBoardContainer>
  );
}

export default Highlight;

const mockHighLights = [
  { id: 'make side-projects', title: 'make side-projects' },
  { id: 'walking', title: 'walking' },
];
const mockDoneList = [{ id: 'study flutter', title: 'study flutter' }];
