import "./TuningDropdownItem.scss";
import React from "react";
import PropTypes from "prop-types";
import { useTuning } from "../../../../../../hooks/tuningContext";

const TuningDropdownItem = ({ tuning, children }) => {
  const { tuningDispatch } = React.useCallback(useTuning());

  return (
    <li
      className="tuningDropdownItem"
      onClick={() => tuningDispatch({ type: tuning })}
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
