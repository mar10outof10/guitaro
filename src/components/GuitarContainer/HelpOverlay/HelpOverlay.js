import "./HelpOverlay.scss";
import React from "react";
import { useOverlay } from "hooks/overlayContext";
import { useWindowDimensions } from "hooks/useWindowDimensions";
import { initTone } from "utils/audioFunctions";

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

  const [toneInitialized, setToneInitialized] = React.useState(false);

  const windowWidth = window.innerWidth;

  React.useEffect(() => {
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

  const handleOnClick = async () => {
    if (!toneInitialized) {
      await initTone();
      setToneInitialized(true);
    }
    overlayDispatch({ type: "TOGGLE_OVERLAY" });
  };

  const OverlayImage = () => (
    <img
      src={overlaySrc}
      alt="How-to overlay"
      draggable="false"
      onClick={handleOnClick}
    ></img>
  );

  return <div className={overlayClassName}>{overlay && <OverlayImage />}</div>;
};

export default HelpOverlay;
