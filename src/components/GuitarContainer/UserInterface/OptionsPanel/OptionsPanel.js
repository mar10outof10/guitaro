import "./OptionsPanel.scss";
import HelpOverlayToggle from "./HelpOverlayToggle/HelpOverlayToggle";

const OptionsPanel = () => {
  return (
    <section className="optionsPanel">
      <HelpOverlayToggle />
    </section>
  );
};

export default OptionsPanel;
