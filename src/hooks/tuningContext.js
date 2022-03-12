import React from "react";
import PropTypes from "prop-types";

const TuningContext = React.createContext(null);

const useTuning = () => React.useContext(TuningContext);

const TuningProvider = ({ value, children }) => {
  return (
    <TuningContext.Provider value={value}>{children}</TuningContext.Provider>
  );
};

TuningProvider.propTypes = {
  value: PropTypes.object,
  children: PropTypes.element,
};

export { TuningProvider, useTuning };
