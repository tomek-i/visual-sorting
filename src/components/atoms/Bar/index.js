import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Bar = (props) => {
  const [value, setValue] = useState(props.value || 0);
  const [width, setWidth] = useState(props.width || 20);
  const [height, setHeight] = useState(props.height || 18);

  useEffect(() => {
    //every render
    console.log("rendered");
  });
  useEffect(() => {
    setHeight(18 + value);
  }, [value]);

  return (
    <div className="bar" style={{ width: `${width}px`, height: `${height}px` }}>
      <span className="bar-value">{value}</span>
    </div>
  );
};
