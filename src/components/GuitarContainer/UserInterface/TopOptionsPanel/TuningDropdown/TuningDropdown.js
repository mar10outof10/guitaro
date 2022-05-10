import "./TuningDropdown.scss";
import React from "react";
import TuningDropdownItem from "./TuningDropdownItem/TuningDropdownItem";
import OutsideTrigger from "hooks/outsideTrigger";
import { useTuning } from "hooks/tuningContext";
import { allTuning } from "assets/schema/constants";
import PropTypes from "prop-types";

const TuningDropdownList = ({ activeState, dispatchActiveState }) => {
  const stickyClassName = `tuningDropdownItem${
    activeState.stickyActive ? " tuningDropdownItem__stickyToggle__active" : ""
  }`;
  return (
    <div className="tuningDropdown__dropdown">
      {allTuning.map((tuning) => (
        <TuningDropdownItem
          key={tuning.key}
          itemID={tuning.key}
          activeState={activeState}
          dispatchActiveState={dispatchActiveState}
          tuning={tuning.tuning}
          currentlyActive={activeState.activeKey === tuning.key}
        >
          {tuning.dropdownBodyText}
        </TuningDropdownItem>
      ))}
      <div
        className={stickyClassName}
        onClick={() => dispatchActiveState({ type: "TOGGLE_STICKY_DROPDOWN" })}
      >
        Sticky Menu
      </div>
    </div>
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
        <span className="tuningDropdown__mobileTextLabel">
          Current Tuning:{" "}
        </span>
        <span className="tuningDropdown__currentTuningLabel">
          {dropdownBodyText}
        </span>
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
          dropdownActive: state.stickyActive
            ? state.dropdownActive
            : !state.dropdownActive,
        };
      case "SET_ACTIVE_KEY":
        return {
          ...state,
          activeKey: action.key,
        };
      case "TOGGLE_STICKY_DROPDOWN":
        return {
          ...state,
          stickyActive: !state.stickyActive,
        };
      default:
        return state;
    }
  };

  const [activeState, dispatchActiveState] = React.useReducer(activeReducer, {
    activeKey: 1,
    dropdownActive: false,
    stickyActive: false,
  });

  const dropdownClassName = `tuningDropdown__container tuningDropdown__container__${
    activeState.dropdownActive ? "active" : "inactive"
  }`;

  return (
    <div className="tuningDropdown">
      <div className="tuningDropdown__text">Tuning</div>
      <ul className={dropdownClassName}>
        {activeState.dropdownActive ? (
          <OutsideTrigger
            callback={() => dispatchActiveState({ type: "TOGGLE_DROPDOWN" })}
          >
            <TuningDropdownList
              activeState={activeState}
              dispatchActiveState={dispatchActiveState}
            />
          </OutsideTrigger>
        ) : (
          <>
            <TuningActive
              activeState={activeState}
              dispatchActiveState={dispatchActiveState}
            />
          </>
        )}
      </ul>
    </div>
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
