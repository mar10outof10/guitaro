import "./HelpOverlayToggle.scss";
import { useOverlay } from "../../../../../hooks/overlayContext";

const HelpOverlayToggle = () => {
  const { overlayDispatch } = useOverlay();
  return (
    <button
      className="helpOverlayToggle"
      onClick={() => overlayDispatch({ type: "TOGGLE_OVERLAY" })}
    >
      {/* <img src={require()} alt="gear help icon" onClick={toggleHelpOverlay} */}
    </button>
  );
};

export default HelpOverlayToggle;
