import "./GuitarHead.scss";
import React from "react";
import TuningKeys from "./TuningKeys/TuningKeys.js";
import TuningPosts from "./TuningPosts/TuningPosts.js";
import HeadStrings from "./HeadStrings/HeadStrings.js";
import GuitarFrame from "./GuitarFrame/GuitarFrame.js";

const GuitarHead = React.memo(function GuitarHead() {
  return (
    <div className="guitarHead" draggable="false">
      <GuitarFrame />
      <TuningKeys />
      <TuningPosts />
      <HeadStrings />
    </div>
  );
});

export default GuitarHead;
