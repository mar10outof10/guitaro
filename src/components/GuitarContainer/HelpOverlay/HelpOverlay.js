import "./HelpOverlay.scss";
import React from "react";
import { useOverlay } from "../../../hooks/overlayContext";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

const HelpOverlay = function HelpOverlay() {
  const { overlay, overlayDispatch } = useOverlay();

  const { width } = useWindowDimensions();

  const overlayClassName = `helpOverlay helpOverlay__${
    overlay.active ? "active" : "inactive"
  }`;

  const [overlaySrc, setOverlaySrc] = React.useState(
    require(`../../../assets/images/help_overlay${
      window.innerWidth <= 600 ? "_mobile_closed" : ""
    }.png`)
  );

  const windowWidth = window.innerWidth;

  React.useEffect(() => {
    console.log(width);
    setOverlaySrc(
      require(`../../../assets/images/help_overlay${
        window.innerWidth <= 600
          ? overlay.stringsPanelOpen
            ? "_mobile_open"
            : "_mobile_closed"
          : ""
      }.png`)
    );
  }, [width, overlay.stringsPanelOpen]);

  console.log(overlaySrc);

  const OverlayImage = () => (
    <img
      src={overlaySrc}
      alt="How-to overlay"
      draggable="false"
      onClick={() => overlayDispatch({ type: "TOGGLE_OVERLAY" })}
    ></img>
  );

  return <div className={overlayClassName}>{overlay && <OverlayImage />}</div>;
};

export default HelpOverlay;
