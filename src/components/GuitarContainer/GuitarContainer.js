import "./GuitarContainer.scss";
import Guitar from "./Guitar/Guitar.js";
import UserInterface from "./UserInterface/UserInterface.js";
import eStandardTuning from "../../assets/schema/constants";
import React from "react";

const GuitarContainer = () => {
  const initialStrings = { ...eStandardTuning };

  React.useEffect(() => {}, []);

  const freqReducer = (state, action) => {
    switch (action.type) {
      case "FREQ_UP":
        return state + 1;
      case "FREQ_DOWN":
        return state - 1;
    }
  };

  const [freq, freqDispatch] = React.useReducer(freqReducer, 1);

  return (
    <div className="guitarContainer">
      <Guitar />
      <UserInterface />
    </div>
  );
};

export default GuitarContainer;
