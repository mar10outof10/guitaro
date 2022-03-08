import "./GuitarContainer.scss";
import Guitar from "./Guitar/Guitar.js";
import UserInterface from "./UserInterface/UserInterface.js";
import { eStandardTuning, freqTable } from "../../assets/schema/constants";
import React from "react";

import { StringsProvider, useStrings } from "../../hooks/stringsContext.js";

const GuitarContainer = React.memo(function GuitarContainer() {
  console.log("gc rerender");
  const initialStrings = [...eStandardTuning];

  const stringsReducer = (state, action) => {
    console.log("active");
    switch (action.type) {
      case "INCREASE_FREQUENCY":
        return state.map((string) => {
          if (string.id === action.id) {
            return {
              ...string,
              frequency: Math.round((string.frequency + 0.2) * 10) / 10,
            };
          } else {
            return string;
          }
        });
      case "DECREASE_FREQUENCY":
        return state.map((string) => {
          if (string.id === action.id) {
            return {
              ...string,
              frequency: Math.round((string.frequency - 0.2) * 10) / 10,
            };
          } else {
            return string;
          }
        });
      case "SET_FREQUENCY_TO_NOTE":
        return state.map((string) => {
          if (string.id === action.id) {
            return {
              ...string,
              frequency: freqTable[action.note].freq,
            };
          } else {
            return string;
          }
        });
      case "RESET_STRINGS_ESTANDARD":
        console.log("reset");
        return initialStrings;
      default:
        return state;
    }
  };
  const [strings, stringsDispatch] = React.useReducer(
    stringsReducer,
    initialStrings
  );

  return (
    <StringsProvider value={{ stringsDispatch, strings }}>
      <div className="guitarContainer">
        <Guitar />
        <UserInterface />
      </div>
    </StringsProvider>
  );
});

export default GuitarContainer;
