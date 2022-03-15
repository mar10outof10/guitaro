import "./TuningKeys.scss";
import React from "react";
import TuningKeyContainer from "./TuningKeyContainer/TuningKeyContainer.js";

const TuningKeys = React.memo(function TuningKeys() {
  return (
    <div className="tuningKeys">
      <div className="tuningKeys__column">
        <TuningKeyContainer stringID={3} side="left"></TuningKeyContainer>
        <TuningKeyContainer stringID={2} side="left"></TuningKeyContainer>
        <TuningKeyContainer stringID={1} side="left"></TuningKeyContainer>
      </div>
      <div className="tuningKeys__column">
        <TuningKeyContainer stringID={4} side="right"></TuningKeyContainer>
        <TuningKeyContainer stringID={5} side="right"></TuningKeyContainer>
        <TuningKeyContainer stringID={6} side="right"></TuningKeyContainer>
      </div>
    </div>
  );
});

export default TuningKeys;
