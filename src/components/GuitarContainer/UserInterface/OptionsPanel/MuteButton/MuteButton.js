import "./MuteButton.scss";
import { useAudio } from "hooks/audioContext";

const MuteButton = () => {
  const { audio, audioDispatch } = useAudio();

  const buttonClassname = `muteButton muteButton${
    audio.mute ? "__active" : "__inactive"
  }`;

  const handleOnMouseDown = (e) => {
    e.preventDefault();
    audioDispatch({ type: "TOGGLE_MUTE" });
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
      <div className="muteButton__iconContainer">
        <img
          src={require(`../../../../../assets/images/mute_button_${
            audio.mute ? "active" : "inactive"
          }.png`)}
          alt={`Mute Button ${audio.mute ? "Active" : "Inactive"} icon`}
        ></img>
      </div>
    </button>
  );
};

export default MuteButton;
