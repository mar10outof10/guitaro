import "./TuningDropdownItem.scss";
import React from "react";
import PropTypes from "prop-types";
import { useTuning } from "../../../../../../hooks/tuningContext";
import { useStrings } from "../../../../../../hooks/stringsContext";

const TuningDropdownItem = ({ tuning, children }) => {
  const { tuningDispatch } = React.useCallback(useTuning());
  const { stringsDispatch } = React.useCallback(useStrings());

  return (
    <li
      className="tuningDropdownItem"
      onClick={async () => {
        await tuningDispatch({ type: tuning });
        stringsDispatch({ type: "RESET_STRINGS" });
      }}
    >
      {children}
    </li>
  );
};

TuningDropdownItem.propTypes = {
  tuning: PropTypes.string,
  tuningDispatch: PropTypes.function,
  children: PropTypes.node,
};
export default TuningDropdownItem;
