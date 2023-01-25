export const TimeList = () => {
  let timeList = new Array(25)
    .fill(0)
    .map((time, i) => (time + i).toString().padStart(2, "0"));

  return (
    <ol className="bg-rose-200 px-4">
      {timeList.map((time) => (
        <li key={time}>{time}</li>
      ))}
    </ol>
  );
};

export const TimeContainer = () => {
  return <div className="border-b-1">to-do</div>;
};

export default function TimeBox() {
  let mockArr = new Array(25).fill("...");

  return (
    <div className="flex w-full">
      <TimeList />
      <div className="grow bg-gray-200">
        {mockArr.map((todo, i) => (
          <TimeContainer key={i} />
        ))}
      </div>
    </div>
  );
}
