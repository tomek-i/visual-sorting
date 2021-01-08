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
}) => {
  return (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
      <div className="navbar--logo-holder">
        {sticky ? <img src={logo} alt={logo} className="navbar--logo" /> : null}
        <h1> Stick'Me</h1>
      </div>
      <MainControl
        items={items}
        arraySizes={arraySizes}
        onArrayChange={onArrayChange}
      />
    </nav>
  );
};
