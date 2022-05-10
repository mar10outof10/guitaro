import "./TuningDropdownItem.scss";
import React from "react";
import PropTypes from "prop-types";
import { useTuning } from "hooks/tuningContext";
import { useStrings } from "hooks/stringsContext";

const TuningDropdownItem = ({
  itemID,
  tuning,
  activeState,
  currentlyActive,
  dispatchActiveState,
  children,
}) => {
  const { tuningDispatch } = React.useCallback(useTuning());
  const { stringsDispatch } = React.useCallback(useStrings());

  const tuningClassName = `tuningDropdownItem${
    currentlyActive ? " tuningDropdownItem__active" : ""
  }`;

  const onClick = activeState.dropdownActive
    ? async () => {
        await tuningDispatch({ type: tuning });
        stringsDispatch({ type: "RESET_STRINGS" });
        dispatchActiveState({ type: "SET_STATE", key: itemID });
      }
    : () => {
        dispatchActiveState({ type: "TOGGLE_DROPDOWN" });
      };

  return (
    <li className={tuningClassName} onClick={onClick}>
      {children}
    </li>
  );
};

TuningDropdownItem.propTypes = {
  tuning: PropTypes.string,
  tuningDispatch: PropTypes.func,
  itemID: PropTypes.number,
  activeState: PropTypes.object,
  currentlyActive: PropTypes.bool,
  dispatchActiveState: PropTypes.func,
  children: PropTypes.node,
};
export default TuningDropdownItem;
