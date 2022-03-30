import React from "react";
import "./StringLabel.scss";
import PropTypes from "prop-types";
import { useStrings } from "../../../../../../hooks/stringsContext";
import { playFrequency } from "../../../../../../utils/audioFunctions";

const StringLabel = function StringLabel({ frequency, children }) {
  return (
    <button
      className="stringLabel"
      onMouseDown={() => playFrequency(frequency)}
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
