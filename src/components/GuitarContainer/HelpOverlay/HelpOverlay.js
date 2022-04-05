import "./HelpOverlay.scss";
import React from "react";
import { useOverlay } from "../../../hooks/overlayContext";

const HelpOverlay = function HelpOverlay() {
  const { overlay, overlayDispatch } = useOverlay();

  const overlayClassName = `helpOverlay helpOverlay__${
    overlay ? "active" : "inactive"
  }`;

  const OverlayImage = () => (
    <img
      src={require("../../../assets/images/help_overlay.png")}
      alt="How-to overlay"
      draggable="false"
      onClick={() => overlayDispatch({ type: "TOGGLE_OVERLAY" })}
    ></img>
  );

  return <div className={overlayClassName}>{overlay && <OverlayImage />}</div>;
};

export default HelpOverlay;
