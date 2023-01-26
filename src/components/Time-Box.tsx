export const TimeList = () => {
  let timeList = new Array(25)
    .fill(0)
    .map((time, i) => (time + i).toString().padStart(2, "0"));

  return (
    <ol className="px-4 h-full">
      {timeList.map((time) => (
        <li className="pb-10 text-xs h-12 " key={time}>
          {time}
        </li>
      ))}
    </ol>
  );
};

export const TimeContainer = () => {
  return <div className="h-12 border-b-2 border-blue-200">to-do</div>;
};

export default function TimeBox() {
  let mockArr = new Array(24).fill("...");

  return (
    <div className="flex h-200 w-96 overflow-auto shadow-lg">
      <TimeList />
      <div className="grow pt-2">
        {mockArr.map((todo, i) => (
          <TimeContainer key={i} />
        ))}
      </div>
    </div>
  );
}
