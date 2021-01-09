import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { MainControl } from "../MainControl";

export const NavigationBar = ({
  sticky,
  logo,
  items,
  arraySizes,
  onArrayChange,
  onAlgorithmChange,
}) => {
  return (
    <nav className={"navbar"}>
      <div className="navbar--logo-holder">
        <img src={logo} alt={logo} className="navbar--logo" />
        <h1>Title</h1>
      </div>
      <MainControl
        items={items}
        arraySizes={arraySizes}
        onArrayChange={onArrayChange}
        onAlgorithmChange={onAlgorithmChange}
      />
    </nav>
  );
};
