import { useEffect, useState } from "react";
import { Chart } from "../Chart";
import { Backdrop } from "../Backdrop";
import "./style.css";

import { AnimationControl } from "../../molecules/AnimationControl";

export const ChartController = (props) => {
  const [originalNumbers, setOriginalNumbers] = useState([...props.numbers]);
  const [stepIndex, setStepIndex] = useState(0);
  const [currentNumbers, setCurrentNumbers] = useState(props.numbers);

  useEffect(() => {
    setOriginalNumbers([...props.numbers]);
    setCurrentNumbers(props.numbers);
  }, [props.numbers]);
  let counter = 0;

  let interval = null;
  const play = () => {};

  useEffect(() => {
    if (props.steps.length > 0) {
      interval = setInterval(() => {
        counter++;
        setStepIndex(counter);
      }, 250);
    }
  }, [props.steps]);

  useEffect(() => {
    if (props.steps.length > 0) {
      if (stepIndex < props.steps.length) {
        let currentstep = props.steps[stepIndex];

        setCurrentNumbers(currentstep.numbers);
      } else {
        clearInterval(interval);
      }
    }
  }, [stepIndex]);

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
        <Chart numbers={currentNumbers} currentStep={props.steps[stepIndex]} />
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
