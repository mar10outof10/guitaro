import "./GuitarContainer.scss";
import Guitar from "./Guitar/Guitar.js";
import UserInterface from "./UserInterface/UserInterface.js";
import { eStandardTuning } from "../../assets/schema/constants";
import React from "react";

import { StringsProvider, useStrings } from "../../hooks/stringsContext.js";
import { AudioProvider, useAudio } from "../../hooks/audioContext.js";

import * as Tone from "tone";

const GuitarContainer = React.memo(function GuitarContainer() {
  const initialStrings = [...eStandardTuning];

  const stringsReducer = (state, action) => {
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

  const audioReducer = (state, action) => {
    switch (action.type) {
      case "INITIALIZE_AUDIO_CONTEXT":
        console.log(action);
        return new Tone.Distortion(0.1).toDestination();
      case "PLAY_FREQUENCY":
        let blah = new Tone.Synth().toDestination();
        blah.triggerAttackRelease(action.frequency, "8n");
        blah.context.close;
      // const newContext = new (window.AudioContext ||
      //   window.webkitAudioContext)();
      // const oscillator = newContext.createOscillator();

      // oscillator.type = "square";
      // oscillator.frequency.value = action.frequency;
      // oscillator.connect(newContext.destination);
      // oscillator.start(0);
      // oscillator.stop(newContext.currentTime + 1);
    }
  };

  const [audioContext, audioDispatch] = React.useReducer(audioReducer, null);

  return (
    <StringsProvider value={{ stringsDispatch, strings }}>
      <AudioProvider value={{ audioDispatch, audioContext }}>
        <div className="guitarContainer">
          <Guitar />
          <UserInterface />
        </div>
      </AudioProvider>
    </StringsProvider>
  );
});

export default GuitarContainer;
