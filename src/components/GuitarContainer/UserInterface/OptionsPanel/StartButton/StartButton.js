import "./StartButton.scss";
import { useAudio } from "../../../../../hooks/audioContext";

const StartButton = () => {
  const { audioDispatch } = useAudio();

  const initializeAudioContext = () => {
    audioDispatch({ type: "INITIALIZE_AUDIO_CONTEXT" });
    console.log("yiss");
  };

  return (
    <button className="startButton" onClick={initializeAudioContext}>
      Start!
    </button>
  );
};

export default StartButton;
