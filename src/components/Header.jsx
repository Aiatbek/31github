import React from "react";
import logo from "../assets/investment-calculator-logo.png";

function Header(props) {
  return (
    <div id="header">
      <img src={logo} alt="logo" />
      <h1>React Investment Calculator</h1>
    </div>
  );
}

export default Header;
