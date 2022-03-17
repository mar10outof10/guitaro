import "./TuningDropdown.scss";
import React from "react";
import TuningDropdownItem from "./TuningDropdownItem/TuningDropdownItem";
import { useTuning } from "../../../../../hooks/tuningContext";
import { allTuning } from "../../../../../assets/schema/constants";
import PropTypes from "prop-types";

const TuningDropdownList = ({ activeState, dispatchActiveState }) => {
  return (
    <React.Fragment>
      {allTuning.map((tuning) => (
        <TuningDropdownItem
          key={tuning.key}
          itemID={tuning.key}
          activeState={activeState}
          dispatchActiveState={dispatchActiveState}
          tuning={tuning.tuning}
        >
          {tuning.dropdownBodyText}
        </TuningDropdownItem>
      ))}
    </React.Fragment>
  );
};

const TuningActive = ({ activeState, dispatchActiveState }) => {
  const { key, tuning, dropdownBodyText } = allTuning.find(
    (target) => target.key === activeState.activeKey
  );
  console.log("activerow", activeState);
  return (
    <React.Fragment>
      <TuningDropdownItem
        key={key}
        itemID={tuning.key}
        tuning={tuning}
        activeState={activeState}
        dispatchActiveState={dispatchActiveState}
      >
        {dropdownBodyText}
      </TuningDropdownItem>
    </React.Fragment>
  );
};

const TuningDropdown = () => {
  const { tuning } = React.useCallback(useTuning());

  const activeReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_DROPDOWN":
        return {
          ...state,
          dropdownActive: !state.dropdownActive,
        };
      case "SET_STATE":
        return {
          activeKey: action.key,
          dropdownActive: !state.dropdownActive,
        };
      default:
        return state;
    }
  };

  const [activeState, dispatchActiveState] = React.useReducer(activeReducer, {
    activeKey: 1,
    dropdownActive: false,
  });

  console.log(activeState);

  return (
    <ul
      className="tuningDropdown"
      style={
        activeState.dropdownActive
          ? { maxHeight: "290px" }
          : { maxHeight: "20px" }
      }
    >
      {activeState.dropdownActive ? (
        <TuningDropdownList
          activeState={activeState}
          dispatchActiveState={dispatchActiveState}
        />
      ) : (
        <TuningActive
          activeState={activeState}
          dispatchActiveState={dispatchActiveState}
        />
      )}
    </ul>
  );
};

TuningDropdownList.propTypes = {
  activeState: PropTypes.object,
  dispatchActiveState: PropTypes.func,
};

TuningActive.propTypes = {
  activeState: PropTypes.object,
  dispatchActiveState: PropTypes.func,
};

export default TuningDropdown;
