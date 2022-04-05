import "./MuteButton.scss";
import { useOverlay } from "../../../../../hooks/overlayContext";

const MuteButton = () => {
  const { overlay, overlayDispatch } = useOverlay();

  const buttonClassname = `muteButton MuteButton${
    overlay ? "__active" : "__inactive"
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
      <span className="muteButton__text">?{overlay}</span>
    </button>
  );
};

export default MuteButton;
