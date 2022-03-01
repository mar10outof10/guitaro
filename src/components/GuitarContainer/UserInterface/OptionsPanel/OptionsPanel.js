import "./OptionsPanel.scss";
import StartButton from "./StartButton/StartButton";
import ResetButton from "./ResetButton/ResetButton";

const OptionsPanel = () => {
  return (
    <section className="optionsPanel">
      <StartButton />
      <ResetButton />
    </section>
  );
};

export default OptionsPanel;
