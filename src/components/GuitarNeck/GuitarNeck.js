import "./GuitarNeck.scss";
import React from "react";
import NeckStrings from "./NeckStrings/NeckStrings.js";

import { useStrings } from "../../hooks/stringsContext";
import { useAudio } from "../../hooks/audioContext";

import { playFrequency } from "../../utils/audioFunctions";

import { debounce } from "lodash";

const GuitarNeck = React.memo(function GuitarNeck() {
  const neckRef = React.useRef(null);

  const [leftBound, setLeftBound] = React.useState(null);

  React.useEffect(() => {
    setLeftBound(neckRef.current.getBoundingClientRect().left);
  }, [window.innerWidth]);

  const { strings } = useStrings();
  const { audio } = useAudio();

  const stringXCoordinates = [113, 127, 139, 153, 166, 176];

  const [touchPos, setTouchPos] = React.useState(null);

  const handleTouchStart = (e) => {
    setTouchPos(e.changedTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const currX = e.changedTouches[0].clientX - leftBound;
    const prevIndex = stringXCoordinates.findIndex((coord) => coord > touchPos);
    const currIndex = stringXCoordinates.findIndex((coord) => coord > currX);
    if (prevIndex !== currIndex) {
      let lowIndex = Math.min(prevIndex, currIndex);
      let highIndex = Math.max(prevIndex, currIndex);
      if (lowIndex === -1) {
        [lowIndex, highIndex] = [highIndex, 6];
      }
      for (let i = lowIndex; i < highIndex; i++) {
        playFrequency(strings[i].frequency, audio.volume);
      }
    }
    setTouchPos(currX);
  };

  const handleTouchEnd = () => {
    setTouchPos(null);
  };

  return (
    <div
      className="guitarNeck"
      ref={neckRef}
      onTouchStart={handleTouchStart}
      onTouchMove={audio.mute ? null : debounce(handleTouchMove, 10)}
      onTouchEnd={handleTouchEnd}
    >
      <NeckStrings />
    </div>
  );
});

export default GuitarNeck;
