import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Bar = (props) => {
  const [value, setValue] = useState(props.value || 0);
  const [height, setHeight] = useState(props.height || 0);

  useEffect(() => {
    setHeight(value);
  }, [value]);

  return (
    <div
      className="bar"
      style={{ width: `${props.width}%`, height: `${height}px` }}
    ></div>
  );
};
