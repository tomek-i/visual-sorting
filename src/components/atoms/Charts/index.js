import { Bar } from "../Bar";
import { Backdrop } from "../Backdrop";
import "./style.css";
import { useEffect, useState } from "react";

import { AnimationControl } from "../../molecules/AnimationControl";

const generateBars = (props) => {
  const numbers = props.numbers;
  if (!numbers) return;

  const items = numbers;
  const max = Math.max(...items);
  console.log("MAX VALUE: ", max);
  const colA = props.colorGroup1;
  const colB = props.colorGroup2;
  const colC = props.colorGroup3;
  const colD = props.colorGroup4;
  const sortedIx = props.sortedIndices;

  const width = 100 / items.length; // in percent

  const result = items.map((item, index) => {
    const height = (item / max) * 100; //in percent

    let stateA = colA ? colA.includes(index) : false;
    let stateB = colB ? colB.includes(index) : false;
    let stateC = colC ? colC.includes(index) : false;
    let stateD = colD ? colD.includes(index) : false;
    let sorted = sortedIx ? sortedIx.includes(index) : false;

    return (
      <Bar
        value={item}
        width={width}
        height={height}
        key={`${index}_${item}`}
        colors={(stateA, stateB, stateC, stateD)}
        sorted={sorted}
      />
    );
  });
  console.log("RESULT: ", result);
  return result;
};

export const Charts = (props) => {
  console.log("CHARTS PROPS: ", props);
  //const [numbers, setNumbers] = useState(props.numbers || []);
  const [steps, setSteps] = useState(props.steps || []);
  const [stepIndex, setStepIndex] = useState(-1);
  const [originalNumbers, setOriginalNumbers] = useState(props.numbers || []);

  const onPlayClick = (e) => {
    console.log("play");
  };
  const onPauseClick = (e) => {
    console.log("pause");
  };
  const onResetClick = (e) => {
    console.log("reset");
  };
  const onStepClick = (e) => {};
  return (
    <>
      <Backdrop>
        {generateBars({
          numbers: props.numbers,
          colorGroup2: [],
          colorGroup3: [],
          colorGroup4: [],
          colorGroup1: [],
          sortedIndices: [],
        })}
      </Backdrop>
      <AnimationControl
        onPlay={onPlayClick}
        onPause={onPauseClick}
        onReset={onResetClick}
        onStep={onStepClick}
      />
    </>
  );
};
