import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

//import Backdrop from '../../atoms/Backdrop';
import { Button } from "../../atoms/Button";

export const MenuList = ({ open, items, onSelect }) => {
  return open ? (
    <ul className="menu-list">
      {items.map((item, i) => (
        <li
          key={`${item}_${i}`}
          onClick={(evt) => {
            onSelect(evt, item);
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
  const [items, setItems] = useState(props.items || []);
  const [selected, setSelected] = useState(props.selected || false);
  const [placeholder, setPlaceholder] = useState(
    props.placeholder || "SORT ALGORITHM"
  );

  const onSelect = function (evt, item) {
    console.log("SELECTED: ", item);
    setSelected(item);
    close(evt);
  };
  const close = function (evt) {
    evt.preventDefault();
    setOpen(false);
  };

  const toggle = function (evt) {
    evt.preventDefault();
    setOpen(!open);
  };

  return (
    <div>
      <div className={`menu`}>
        <header className="menu-header">
          <Button
            onClick={toggle}
            className="menu-placeholder"
            text={selected ? selected : placeholder}
          />
        </header>
        <MenuList open={open} items={items} onSelect={onSelect} />
      </div>
    </div>
  );
};
