import React, { useEffect, useState } from "react";
import "./style.css";

import { Menu } from "../Menu";
import { Button } from "../../atoms/Button";

export const MainControl = (props) => {
  return (
    <section className="menu-section">
      <Menu
        text="Select Algorithm"
        items={props.items}
        onItemClick={(item) => {
          props.onAlgorithmChange(item);
        }}
      />
      <Menu
        text="Array Size"
        items={props.arraySizes}
        onItemClick={(item) => {
          props.onArrayChange(item);
        }}
      />
      <Button text="Randomize" onClick={props.onRandom} />
    </section>
  );
};
