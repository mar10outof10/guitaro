import "./OptionsPanel.scss";
import StartButton from "./StartButton/StartButton";
import HelpOverlayToggle from "./HelpOverlayToggle/HelpOverlayToggle";

const OptionsPanel = () => {
  return (
    <section className="optionsPanel">
      <StartButton />
      <HelpOverlayToggle />
    </section>
  );
};

export default OptionsPanel;
