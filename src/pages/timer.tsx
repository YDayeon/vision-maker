import { useEffect, useState } from "react";
import {
  SLeftTime,
  SMinuterHand,
  SSpot,
  STimer,
  STimerContainer,
} from "@/styles/Timer";
import styled from "styled-components";

const Button = styled.button`
  background-color: lightblue;
  box-shadow: 2px 2px 5px lightgray;
  padding: 10px 15px;
  border-radius: 10px;
  margin: 5px;
`;

export default function TimerPage() {
  const [clipPath, setClipPath] = useState(
    "50% 0, 50% 0, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%"
  );
  const [intervalState, setIntervalState] = useState(false);

  const zeroToOneEighth = (x: number) => {
    x += 1 / 9;
    setClipPath(`50% 0, ${x}% 0, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%`);
    if (x > 100) {
      setClipPath(`50% 0, 100% 0, 100% 0, 50% 50%, 50% 50%, 50% 50%, 50% 50%`);
    }
  };
  const oneEighthToThreeEighth = (y: number) => {
    y += 1 / 9;
    setClipPath(
      `50% 0, 100% 0, 100% ${y}%, 50% 50%, 50% 50%, 50% 50%, 50% 50%`
    );
    if (y > 100) {
      setClipPath(
        `50% 0, 100% 0, 100% 100%, 100% 100%, 50% 50%, 50% 50%, 50% 50%`
      );
    }
  };
  const threeEighthToFiveEighth = (x: number) => {
    x -= 1 / 9;
    setClipPath(
      `50% 0, 100% 0, 100% 100%, ${x}% 100%, 50% 50%, 50% 50%, 50% 50%`
    );
    if (x < 0.2) {
      setClipPath(
        `50% 0, 100% 0, 100% 100%, 0 100%, 0% 100%, 50% 50%, 50% 50%`
      );
    }
  };
  const fiveEighthToSevenEighth = (y: number) => {
    y -= 1 / 9;
    setClipPath(`50% 0, 100% 0, 100% 100%, 0 100%, 0 ${y}%, 50% 50%, 50% 50%`);
    if (y < 0.2) {
      setClipPath(`50% 0, 100% 0, 100% 100%, 0 100%, 0 0, 0 0, 50% 50%`);
    }
  };
  const sevenEighthToFull = (x: number) => {
    x += 1 / 9;
    setClipPath(`50% 0, 100% 0, 100% 100%, 0 100%, 0 0, ${x}% 0, 50% 50%`);
    if (x > 49) {
      setClipPath(`50% 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 0, 50% 50%`);
    }
  };

  useEffect(() => {
    if (intervalState) {
      let firstX = 50;
      let currentInterval = setInterval(() => zeroToOneEighth(firstX), 1000);
    } else {
    }
  }, [intervalState]);
  return (
    <>
      <STimerContainer>
        <div className="top">
          <span>60</span>
        </div>
        <div className="middle">
          <span>15</span>
          <STimer>
            <SSpot />
            {/* <SMinuterHand /> */}
            <SLeftTime clipPath={clipPath} />
          </STimer>
          <span>45</span>
        </div>
        <div className="bottom">
          <span>30</span>
        </div>
      </STimerContainer>
      <Button onClick={() => setIntervalState(true)}>start</Button>
      <Button onClick={() => setIntervalState(false)}>reset</Button>
    </>
  );
}

/**
 * -: (50%, 0), 6: (50%, 50%) --fix
 * 1: (50%, 0) -> (100%, 0)
 * 2: (50%, 50%) / (100%, 0) -> (100%, 100%)
 * 3: (50%, 50%) / (100%, 100%) -> (0, 100%)
 * 4: (50%, 50%) / (0, 100%) -> (0, 0)
 * 5: (50%, 50%) / (0, 0) -> (50%, 0)
 */
