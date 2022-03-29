import "./HelpOverlay.scss";
import React from "react";
import { useOverlay } from "../../../hooks/overlayContext";

const HelpOverlay = function HelpOverlay() {
  const { overlay } = useOverlay();

  return <div className="helpOverlay">{overlay && <div>active</div>}</div>;
};

export default HelpOverlay;
