import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

import { Button } from "../../atoms/Button";

export const MenuDropDown = ({ open, items, onItemClick }) => {
  return open ? (
    <ul className="menu-list">
      {items.map((item, i) => (
        <li
          key={`${item}_${i}`}
          onClick={(evt) => {
            if (onItemClick) {
              onItemClick(evt, item);
            }
          }}
          className="menu-item"
        >
          {item}
        </li>
      ))}
    </ul>
  ) : null;
};
export const Menu = (props) => {
  const [open, setOpen] = useState(props.open || false);
  const [text, setText] = useState(props.text || "TEST");

  const closeDropDown = function (evt) {
    evt.preventDefault();
    setOpen(false);
  };

  const toggleDropDown = function (evt) {
    evt.preventDefault();
    setOpen(!open);
  };

  return (
    <div>
      <div className={`menu`}>
        <header className="menu-header">
          <Button
            onClick={toggleDropDown}
            className="menu-placeholder"
            text={text}
          />
        </header>
        <MenuDropDown
          open={open}
          items={props.items}
          onItemClick={(e, item) => {
            props.onItemClick(item);
            setText(item);
            closeDropDown(e);
          }}
        />
      </div>
    </div>
  );
};
