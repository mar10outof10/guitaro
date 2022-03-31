import "./TuningDropdown.scss";
import React from "react";
import TuningDropdownItem from "./TuningDropdownItem/TuningDropdownItem";
import { useTuning } from "../../../../../hooks/tuningContext";
import { allTuning } from "../../../../../assets/schema/constants";
import PropTypes from "prop-types";

const TuningDropdownList = ({ activeState, dispatchActiveState }) => {
  return (
    <>
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
    </>
  );
};

const TuningActive = ({ activeState, dispatchActiveState }) => {
  const { key, tuning, dropdownBodyText } = allTuning.find(
    (target) => target.key === activeState.activeKey
  );
  return (
    <>
      <TuningDropdownItem
        key={key}
        itemID={tuning.key}
        tuning={tuning}
        activeState={activeState}
        dispatchActiveState={dispatchActiveState}
      >
        {dropdownBodyText}
      </TuningDropdownItem>
    </>
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

  return (
    <>
      <div className="tuningDropdown__text">Tuning</div>
      <ul
        className="tuningDropdown"
        style={
          activeState.dropdownActive
            ? { maxHeight: "160px", width: "200px" }
            : { maxHeight: "22px", justifyContent: "center" }
        }
      >
        {activeState.dropdownActive ? (
          <TuningDropdownList
            activeState={activeState}
            dispatchActiveState={dispatchActiveState}
          />
        ) : (
          <>
            <TuningActive
              activeState={activeState}
              dispatchActiveState={dispatchActiveState}
            />
          </>
        )}
      </ul>
    </>
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
