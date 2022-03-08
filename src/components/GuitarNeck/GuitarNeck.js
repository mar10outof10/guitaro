import "./GuitarNeck.scss";
import React from "react";
import NeckStrings from "./NeckStrings/NeckStrings.js";

const GuitarNeck = React.memo(function GuitarNeck() {
  return (
    <div className="guitarNeck">
      <NeckStrings />
    </div>
  );
});

export default GuitarNeck;
