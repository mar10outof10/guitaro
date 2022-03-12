import "./OptionsPanel.scss";
import TuningDropdown from "./TuningDropdown/TuningDropdown";
import StartButton from "./StartButton/StartButton";
import ResetButton from "./ResetButton/ResetButton";

const OptionsPanel = () => {
  return (
    <section className="optionsPanel">
      <TuningDropdown />
      <StartButton />
      <ResetButton />
    </section>
  );
};

export default OptionsPanel;
