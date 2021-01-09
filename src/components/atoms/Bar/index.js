import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Bar = ({
  width,
  height,
  unit,
  value,
  showValue,
  colors,
  sorted,
}) => {
  const valueDisplay = showValue ? (
    <span className="bar-value">{value}</span>
  ) : null;
  let colorClassName = sorted ? "sorted " : "";

  if (colors && colors.stateA) colorClassName += "bar-color-1";
  else if (colors && colors.stateB) colorClassName += "bar-color-2";
  else if (colors && colors.stateC) colorClassName += "bar-color-3";
  else if (colors && colors.stateD) colorClassName += "bar-color-4";

  return (
    <div
      className={`bar ${colorClassName}`}
      style={{
        width: `${width}${unit || "%"}`,
        height: `${height}${unit || "%"}`,
      }}
    >
      {valueDisplay}
    </div>
  );
};
