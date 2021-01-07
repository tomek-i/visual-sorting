import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Button = (props) => {
  const [href, setHref] = useState(props.href || null);
  const [text, setText] = useState(props.text || "");
  const [disabled, setDisabled] = useState(props.disabled || false);

  useEffect(() => {
    if (disabled) setHref(null);
  }, [disabled]);

  if (href) {
    return (
      <a
        onClick={props.onClick}
        href={href}
        className={`button ${disabled ? "disabled" : ""}`}
        disabled={disabled}
      >
        <span className="button-label">{text}</span>
      </a>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className={`button ${disabled ? "disabled" : ""}`}
      disabled={disabled}
    >
      <span className="button-label">{text}</span>
    </button>
  );
};
