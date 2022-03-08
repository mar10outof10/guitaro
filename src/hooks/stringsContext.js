import React from "react";
import PropTypes from "prop-types";

const StringsContext = React.createContext(null);

const useStrings = () => React.useContext(StringsContext);

const StringsProvider = ({ value, children }) => {
  return (
    <StringsContext.Provider value={value}>{children}</StringsContext.Provider>
  );
};

StringsProvider.propTypes = {
  value: PropTypes.object,
  children: PropTypes.element,
};

export { StringsProvider, useStrings };
