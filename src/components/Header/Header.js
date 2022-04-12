import "./Header.scss";
import React from "react";
import HeaderOptions from "./HeaderOptions/HeaderOptions.js";

const Header = React.memo(function Header() {
  return (
    <header className="header">
      <div className="header__logoContainer">
        <img
          className="header__logo"
          src={require("../../assets/images/guitaro_logo_header.png")}
        ></img>
        <a
          className="header__githubLink"
          href="https://github.com/mar10outof10"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="header__githubLogo"
            src={require("../../assets/images/github_logo.png")}
          ></img>
        </a>
      </div>
      <HeaderOptions />
    </header>
  );
});

export default Header;
