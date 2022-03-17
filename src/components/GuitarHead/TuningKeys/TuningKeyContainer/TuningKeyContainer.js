import "./TuningKeyContainer.scss";
import React from "react";
import PropTypes from "prop-types";
import TuningKey from "./TuningKey/TuningKey.js";
import TuningKeyClickBox from "./TuningKeyClickBox/TuningKeyClickBox.js";

const TuningKeyContainer = React.memo(function TuningKeyContainer({
  stringID,
  side,
}) {
  const initialPosition = parseFloat(Math.random().toFixed(2));

  const positionReducer = (state, action) => {
    switch (action.type) {
      case "INITIALIZE_POSITION":
        return {
          reverse: false,
          position: praseFloat(Math.random().toFixed(2)),
        };
      case "INCREASE_POSITION":
        if (!state.reverse) {
          if (state.position + 0.04 >= 1) {
            return {
              reverse: true,
              position: state.position - 0.04,
            };
          }
          return {
            ...state,
            position: state.position + 0.04,
          };
        }
        if (state.position - 0.04 <= 0) {
          return {
            reverse: false,
            position: state.position + 0.04,
          };
        }
        return {
          ...state,
          position: state.position - 0.04,
        };
      case "DECREASE_POSITION":
        if (!state.reverse) {
          if (state.position - 0.04 <= 0) {
            return {
              reverse: true,
              position: state.position + 0.04,
            };
          }
          return {
            ...state,
            position: state.position - 0.04,
          };
        }
        if (state.position + 0.04 >= 1) {
          return {
            reverse: false,
            position: state.position - 0.04,
          };
        }
        return {
          ...state,
          position: state.position + 0.04,
        };
      default:
        return state;
    }
  };

  const [position, positionDispatch] = React.useReducer(positionReducer, {
    reverse: false,
    position: initialPosition,
  });

  return (
    <div className="tuningKeyContainer">
      <TuningKeyClickBox
        positionDispatch={positionDispatch}
        side={side}
        stringID={stringID}
      />
      <TuningKey position={position.position} side={side} />
    </div>
  );
});

TuningKeyContainer.propTypes = {
  stringID: PropTypes.number,
  side: PropTypes.string,
};

export default TuningKeyContainer;

// 6.8opx
