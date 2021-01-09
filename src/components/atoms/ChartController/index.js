import { useEffect, useState } from "react";
import { Chart } from "../Chart";
import { Backdrop } from "../Backdrop";
import "./style.css";

import { AnimationControl } from "../../molecules/AnimationControl";

export const ChartController = (props) => {
  console.log("CHARTS PROPS: ", props);

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
        <Chart numbers={props.numbers} />
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
