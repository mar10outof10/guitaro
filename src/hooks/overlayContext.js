import React from "react";
import PropTypes from "prop-types";

const OverlayContext = React.createContext(null);

const useOverlay = () => React.useContext(OverlayContext);

const OverlayProvider = ({ value, children }) => {
  return (
    <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
  );
};

OverlayProvider.propTypes = {
  value: PropTypes.object,
  children: PropTypes.element,
};

export { OverlayProvider, useOverlay };
