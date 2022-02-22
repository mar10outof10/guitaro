import React from "react";

const StringsContext = React.createContext(null);

const useStrings = () => React.useContext(StringsContext);

const StringsProvider = ({ value, children }) => {
  return (
    <StringsContext.Provider value={value}>{children}</StringsContext.Provider>
  );
};

export { StringsProvider, useStrings };
