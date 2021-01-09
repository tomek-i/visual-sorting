import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { PlayButton } from "../../atoms/PlayButton";

export const AnimationControl = (props) => {
  const [isPlaying, setIsPlaying] = useState(props.isPlaying);

  const onHandlePlay = (e) => {
    if (props.onPlay) props.onPlay(e);
    setIsPlaying(true);
  };
  const onHandlePause = (e) => {
    if (props.onPause) props.onPause(e);
    setIsPlaying(false);
  };

  const onHandleReset = (e) => {
    if (props.onReset) props.onReset(e);
    setIsPlaying(false);
  };
  const onHandleStep = (e) => {
    if (props.onStep) props.onStep(e);
    setIsPlaying(false);
  };
  const playPause = isPlaying ? (
    <PlayButton type={"PAUSE"} onClick={onHandlePause} size={5} />
  ) : (
    <PlayButton type={"PLAY"} onClick={onHandlePlay} size={5} />
  );
  return (
    <div className="animation-control container-row">
      <PlayButton type={"RESET"} size={3} onClick={onHandleReset} />
      {playPause}
      <PlayButton type={"STEP"} size={3} onClick={onHandleStep} />
    </div>
  );
};
