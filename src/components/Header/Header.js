import "./Header.scss";
import React from "react";
import HeaderOptions from "./HeaderOptions/HeaderOptions.js";

const Header = React.memo(function Header() {
  return (
    <header className="header">
      <div className="header_logoContainer">
        <img
          className="header_logo"
          src={require("../../assets/images/guitaro_logo_header.png")}
        ></img>
      </div>
      <HeaderOptions />
    </header>
  );
});

export default Header;
