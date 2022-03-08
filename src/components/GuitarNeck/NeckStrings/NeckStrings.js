import "./NeckStrings.scss";
import React from "react";
import NeckString from "./NeckString/NeckString.js";

const NeckStrings = React.memo(function NeckStrings() {
  return (
    <div className="neckStrings">
      <NeckString id={1} />
      <NeckString id={2} />
      <NeckString id={3} />
      <NeckString id={4} />
      <NeckString id={5} />
      <NeckString id={6} />
    </div>
  );
});

export default NeckStrings;
