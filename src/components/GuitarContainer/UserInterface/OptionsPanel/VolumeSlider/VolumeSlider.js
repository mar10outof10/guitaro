import "./VolumeSlider.scss";
import { useAudio } from "../../../../../hooks/audioContext";
import React from "react";

const VolumeSlider = () => {
  const { audio, audioDispatch } = useAudio();

  const [position, setPosition] = React.useState(60);

  const pointerStyle = {
    left: position - 30,
  };

  const handleSliderClick = React.useCallback((e) => {
    const clientX = Math.max(
      0,
      Math.min(60, e.clientX - e.target.getBoundingClientRect().left)
    ); //x position within the element within range of 0-60
    setPosition(clientX);
    audioDispatch({ type: "SET_VOLUME", volume: parseInt(clientX / 2) - 35 });
  });

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
      <div
        className="volumeSlider__sliderContainer"
        onMouseDown={handleSliderClick}
      >
        <div className="volumeSlider__sliderPointer" style={pointerStyle}></div>
      </div>
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
