import "./VolumeSlider.scss";
// import { useAudio } from "../../../../../hooks/audioContext";

const VolumeSlider = () => {
  // const { audio, audioDispatch } = useAudio();

  // const buttonClassname = `volumeSlider volumeSlider${
  //   overlay ? "__active" : "__inactive"
  // }`;

  // const handleOnMouseDown = (e) => {
  //   e.preventDefault();
  //   overlayDispatch({ type: "TOGGLE_OVERLAY" });
  // };

  // const disableDefault = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="volumeSlider">
      <div className="volumeSlider__sliderContainer"></div>
      <div className="volumeSlider__iconsContainer">
        <img
          src={require("../../../../../assets/images/volume_low_icon.png")}
          alt="Low Volume Icon"
          onClick={() => audioDispatch({ type: "REDUCE_VOLUME" })}
        ></img>
        <img
          src={require("../../../../../assets/images/volume_high_icon.png")}
          alt="High Volume Icon"
          onClick={() => audioDispatch({ type: "INCREASE_VOLUME" })}
        ></img>
      </div>
    </div>
  );
};

export default VolumeSlider;
