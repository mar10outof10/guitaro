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

  const handleTouchStart = React.useCallback(
    (e) => {
      setTouchPos(e.changedTouches[0].clientX - leftBound);
    },
    [leftBound]
  );

  const handleMouseEnter = React.useCallback(
    (e) => {
      setTouchPos(e.clientX - leftBound);
    },
    [leftBound]
  );

  const handlePointerMove = React.useCallback(
    (e) => {
      const clientX = e.clientX ? e.clientX : e.changedTouches[0].clientX; // sets clientX depending on if mouse (true) or mobile touch (false)
      const currX = clientX - leftBound;
      const prevIndex = stringXCoordinates.findIndex(
        (coord) => coord > touchPos
      );
      const currIndex = stringXCoordinates.findIndex((coord) => coord > currX);
      if (prevIndex !== currIndex) {
        // string X position falls within bounds of prev and curr X coords
        let lowIndex = Math.min(prevIndex, currIndex);
        let highIndex = Math.max(prevIndex, currIndex);
        if (lowIndex === -1) {
          // edge case for findIndex if x coord is beyond last string x position
          [lowIndex, highIndex] = [highIndex, 6];
        }
        for (let i = lowIndex; i < highIndex; i++) {
          playFrequency(strings[i].frequency, audio.volume);
        }
      }
      setTouchPos(currX);
    },
    [touchPos]
  );

  const clearTouchPos = () => {
    setTouchPos(null);
  };

  return (
    <div
      className="guitarNeck"
      ref={neckRef}
      onTouchStart={handleTouchStart}
      onTouchMove={audio.mute ? null : debounce(handlePointerMove, 10)}
      onMouseEnter={handleMouseEnter}
      onMouseMove={audio.mute ? null : debounce(handlePointerMove, 10)}
      onPointerLeave={debounce(clearTouchPos, 10)}
    >
      <NeckStrings />
    </div>
  );
});

export default GuitarNeck;
