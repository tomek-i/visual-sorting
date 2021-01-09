import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";

export const PlayButton = ({ type, size, onClick }) => {
  const getType = (type) => {
    switch (type) {
      case "PLAY":
        return <>&#9654;</>;
      case "STEP":
        return <>&#187;</>;
      case "PAUSE":
        return <>II</>;
      case "RESET":
        return <>[]</>;
      default:
        break;
    }
  };
  const symbol = getType(type);
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <div
      className="play-button-outer"
      style={{
        width: `${size || 5}em`,
        height: `${size || 5}em`,
      }}
      onClick={handleClick}
    >
      <div className="play-button">{symbol}</div>
    </div>
  );
};
