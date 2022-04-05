import "./OptionsPanel.scss";
import MuteButton from "./MuteButton/MuteButton";
import VolumeSlider from "./VolumeSlider/VolumeSlider";
import HelpOverlayToggle from "./HelpOverlayToggle/HelpOverlayToggle";

const OptionsPanel = () => {
  return (
    <section className="optionsPanel">
      <div className="optionsPanel__optionsContainer">
        <MuteButton />
        <VolumeSlider />
      </div>
      <HelpOverlayToggle />
    </section>
  );
};

export default OptionsPanel;
