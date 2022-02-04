import "./Header.scss";
import HeaderOptions from "../HeaderOptions/HeaderOptions";

const Header = () => {
  return (
    <header className="header">
      <div className="header_logoContainer">
        <img
          className="header_logo"
          src={require("../../assets/images/guitaro_logo_header.png")}
        ></img>
      </div>
      <div className="header_label">{`I'm a header :-)`}</div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
