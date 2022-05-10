import React from "react";
import "./StringLabel.scss";
import PropTypes from "prop-types";
import { useAudio } from "hooks/audioContext";

import { playFrequency } from "utils/audioFunctions";

const StringLabel = function StringLabel({ frequency, children }) {
  const { audio } = useAudio();

  return (
    <button
      className="stringLabel"
      onMouseDown={() => {
        audio.mute ? null : playFrequency(frequency, audio.volume);
      }}
    >
      {children}
    </button>
  );
};

StringLabel.propTypes = {
  frequency: PropTypes.number,
  children: PropTypes.number,
};

export default StringLabel;
