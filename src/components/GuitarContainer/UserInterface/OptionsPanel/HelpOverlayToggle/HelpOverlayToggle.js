import "./HelpOverlayToggle.scss";
import { useOverlay } from "../../../../../hooks/overlayContext";

const HelpOverlayToggle = () => {
  const { overlay, overlayDispatch } = useOverlay();

  const buttonClassname = `helpOverlayToggle helpOverlayToggle${
    overlay ? "__active" : "__inactive"
  }`;

  return (
    <button
      className={buttonClassname}
      onClick={() => overlayDispatch({ type: "TOGGLE_OVERLAY" })}
    >
      <span className="helpOverlayToggle__text">?{overlay}</span>
    </button>
  );
};

export default HelpOverlayToggle;
