import "./GuitarContainer.scss";
import Guitar from "./Guitar/Guitar.js";
import UserInterface from "./UserInterface/UserInterface.js";
import HelpOverlay from "./HelpOverlay/HelpOverlay.js";
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
import { OverlayProvider, useOverlay } from "../../hooks/overlayContext.js";

const GuitarContainer = React.memo(function GuitarContainer() {
  const tuningReducer = (state, action) => {
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
    switch (action.type) {
      case "INCREASE_FREQUENCY":
        return state.map((string) => {
          if (string.id === action.id) {
            return {
              ...string,
              frequency: Math.min(
                Math.round((string.frequency + 0.2) * 10) / 10,
                999.8
              ),
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
              frequency: Math.max(
                Math.round((string.frequency - 0.2) * 10) / 10,
                50.0
              ),
            };
          } else {
            return string;
          }
        });
      case "SET_FREQUENCY_TO_NOTE":
        return state.map((string) => {
          if (string.id === action.id && freqTable[action.note]) {
            return {
              ...string,
              frequency: freqTable[action.note].freq,
            };
          } else {
            return string;
          }
        });
      case "RESET_STRINGS":
        return tuning.tuning;
      default:
        return state;
    }
  };

  const overlayReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_OVERLAY":
        return !state;
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

  const [overlay, overlayDispatch] = React.useReducer(overlayReducer, true);

  return (
    <StringsProvider value={{ stringsDispatch, strings }}>
      <TuningProvider value={{ tuningDispatch, tuning }}>
        <OverlayProvider value={{ overlayDispatch, overlay }}>
          <div className="guitarContainer">
            <Guitar />
            <UserInterface />
            <HelpOverlay />
          </div>
        </OverlayProvider>
      </TuningProvider>
    </StringsProvider>
  );
});

export default GuitarContainer;
