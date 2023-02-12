import React, { useState } from 'react';

export type THighLight = { id: string; title: string } | null;
export interface IKanbanProps {
  initHightLights: THighLight[];
  initDoneList: THighLight[];
}
export type TDropType = 'todo' | 'done';

function useKanban({ initHightLights, initDoneList }: IKanbanProps) {
  const [hightLights, setHightLights] = useState<THighLight[]>(initHightLights);
  const [doneList, setDoneList] = useState<THighLight[]>(initDoneList);
  const [dragItem, setDragItem] = useState<THighLight>(null);

  function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
    const dragItem = e.currentTarget.id;
    setDragItem({ id: dragItem, title: dragItem });
    e.dataTransfer.effectAllowed = 'move';
  }
  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }
  function handleDrop(e: React.DragEvent<HTMLDivElement>, type: TDropType) {
    e.preventDefault();
    if (dragItem !== null) {
      if (type === 'todo') {
        setHightLights([...hightLights, dragItem]);
        let leftDones = doneList.filter((item) => item?.id !== dragItem.id);
        setDoneList(leftDones);
        setDragItem(null);
      }
      if (type === 'done') {
        setDoneList([...doneList, dragItem]);
        let leftHightLights = hightLights.filter(
          (item) => item?.id !== dragItem.id
        );
        setHightLights(leftHightLights);
        setDragItem(null);
      }
    }
  }

  return { hightLights, doneList, handleDragStart, handleDragOver, handleDrop };
}

export default useKanban;
