import "./VolumeSlider.scss";
import { useAudio } from "../../../../../hooks/audioContext";
import React from "react";

const VolumeSlider = () => {
  const { audio, audioDispatch } = useAudio();

  const sliderRef = React.useRef(null);

  const [position, setPosition] = React.useState(60);

  const pointerStyle = {
    left: position - 30,
  };

  const handleSliderClick = React.useCallback((e) => {
    const clientX = Math.max(
      0,
      Math.min(60, e.clientX - sliderRef.current.getBoundingClientRect().left)
    ); //x position within the element within range of 0-60
    audioDispatch({ type: "SET_VOLUME", volume: parseInt(clientX / 2) - 35 });
  });

  const handleVolumeIconClick = React.useCallback((type) => {
    audioDispatch({ type });
  });

  React.useEffect(() => {
    setPosition((audio.volume + 35) * 2);
  }, [audio.volume]);

  return (
    <div className="volumeSlider">
      <div
        className="volumeSlider__sliderContainer"
        onMouseDown={handleSliderClick}
      >
        <div className="volumeSlider__slider" ref={sliderRef}>
          <div
            className="volumeSlider__sliderPointer"
            style={pointerStyle}
          ></div>
        </div>
      </div>
      <div className="volumeSlider__iconsContainer">
        <img
          src={require("../../../../../assets/images/volume_low_icon.png")}
          alt="Low Volume Icon"
          onClick={() => handleVolumeIconClick("DECREASE_VOLUME")}
        ></img>
        <img
          src={require("../../../../../assets/images/volume_high_icon.png")}
          alt="High Volume Icon"
          onClick={() => handleVolumeIconClick("INCREASE_VOLUME")}
        ></img>
      </div>
    </div>
  );
};

export default VolumeSlider;
