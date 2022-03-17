import "./TuningDropdownItem.scss";
import React from "react";
import PropTypes from "prop-types";
import { useTuning } from "../../../../../../hooks/tuningContext";
import { useStrings } from "../../../../../../hooks/stringsContext";

const TuningDropdownItem = ({
  itemID,
  tuning,
  activeState,
  dispatchActiveState,
  children,
}) => {
  const { tuningDispatch } = React.useCallback(useTuning());
  const { stringsDispatch } = React.useCallback(useStrings());

  return (
    <li
      className="tuningDropdownItem"
      onClick={async () => {
        await tuningDispatch({ type: tuning });
        stringsDispatch({ type: "RESET_STRINGS" });
        dispatchActiveState(
          activeState.dropdownActive
            ? { type: "SET_STATE", key: itemID }
            : { type: "TOGGLE_DROPDOWN" }
        );
      }}
    >
      {children}
    </li>
  );
};

TuningDropdownItem.propTypes = {
  tuning: PropTypes.string,
  tuningDispatch: PropTypes.func,
  itemID: PropTypes.number,
  activeState: PropTypes.object,
  dispatchActiveState: PropTypes.func,
  children: PropTypes.node,
};
export default TuningDropdownItem;
