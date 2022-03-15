import "./GuitarContainer.scss";
import Guitar from "./Guitar/Guitar.js";
import UserInterface from "./UserInterface/UserInterface.js";
import {
  eStandardTuning,
  ebStandardTuning,
  dStandardTuning,
  dropDTuning,
  dropATuning,
  openATuning,
  openBTuning,
  openCTuning,
  openDTuning,
  openETuning,
  openFTuning,
  openGTuning,
  DADGADTuning,
  freqTable,
} from "../../assets/schema/constants";
import React from "react";

import { StringsProvider, useStrings } from "../../hooks/stringsContext.js";
import { TuningProvider, useTuning } from "../../hooks/tuningContext.js";

const GuitarContainer = React.memo(function GuitarContainer() {
  console.log("gc rerender");

  const tuningReducer = (state, action) => {
    console.log("tuning reducer active type", action.type, state);
    switch (action.type) {
      case "ESTANDARD_TUNING":
        return { ...eStandardTuning };
      case "EBSTANDARD_TUNING":
        return { ...ebStandardTuning };
      case "DSTANDARD_TUNING":
        return { ...dStandardTuning };
      case "DROPD_TUNING":
        return { ...dropDTuning };
      case "DROPA_TUNING":
        return { ...dropATuning };
      case "OPENA_TUNING":
        return { ...openATuning };
      case "OPENB_TUNING":
        return { ...openBTuning };
      case "OPENC_TUNING":
        return { ...openCTuning };
      case "OPEND_TUNING":
        return { ...openDTuning };
      case "OPENE_TUNING":
        return { ...openETuning };
      case "OPENF_TUNING":
        return { ...openFTuning };
      case "OPENG_TUNING":
        return { ...openGTuning };
      case "DADGAD_TUNING":
        return { ...DADGADTuning };
      default:
        return state;
    }
  };

  const stringsReducer = (state, action) => {
    console.log("strings reducer active");
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
      case "RESET_STRINGS":
        console.log("reset");
        return tuning.tuning;
      default:
        return state;
    }
  };
  const [tuning, tuningDispatch] = React.useReducer(tuningReducer, {
    ...eStandardTuning,
  });

  const [strings, stringsDispatch] = React.useReducer(
    stringsReducer,
    tuning.tuning
  );

  return (
    <StringsProvider value={{ stringsDispatch, strings }}>
      <TuningProvider value={{ tuningDispatch, tuning }}>
        <div className="guitarContainer">
          <Guitar />
          <UserInterface />
        </div>
      </TuningProvider>
    </StringsProvider>
  );
});

export default GuitarContainer;
