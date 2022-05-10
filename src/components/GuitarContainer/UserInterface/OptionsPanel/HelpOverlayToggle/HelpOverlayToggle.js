import "./HelpOverlayToggle.scss";
import { useOverlay } from "hooks/overlayContext";

const HelpOverlayToggle = () => {
  const { overlay, overlayDispatch } = useOverlay();

  const buttonClassname = `helpOverlayToggle helpOverlayToggle${
    overlay.active ? "__active" : "__inactive"
  }`;

  const handleOnMouseDown = (e) => {
    e.preventDefault();
    overlayDispatch({ type: "TOGGLE_OVERLAY" });
  };

  const disableDefault = (e) => {
    e.preventDefault();
  };

  return (
    <button
      className={buttonClassname}
      onMouseDown={handleOnMouseDown}
      onFocus={disableDefault}
    >
      <span className="helpOverlayToggle__text">?</span>
    </button>
  );
};

export default HelpOverlayToggle;
