import React from "react";

const AudioContext = React.createContext(null);

const useAudio = () => React.useContext(AudioContext);

const AudioProvider = ({ value, children }) => {
  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};

export { AudioProvider, useAudio };
