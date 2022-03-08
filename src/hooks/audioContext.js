import React from "react";
import PropTypes from "prop-types";

const AudioContext = React.createContext(null);

const useAudio = () => React.useContext(AudioContext);

const AudioProvider = ({ value, children }) => {
  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};

AudioProvider.propTypes = {
  value: PropTypes.object,
  children: PropTypes.element,
};

export { AudioProvider, useAudio };
