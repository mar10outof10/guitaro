import "./TuningKeyClickBox.scss";
import TuningKey from "./TuningKey/TuningKey.js";

import React from "react";
import { useStrings } from "../../../../hooks/stringsContext";
import PropTypes from "prop-types";
import { initDrag, endDrag } from "../../../../utils/tuningFunctions";

const TuningKeyClickBox = React.memo(function TuningKeyClickBox({
  stringID,
  side,
}) {
  const { stringsDispatch } = React.useCallback(useStrings());
  const [mouseY, setMouseY] = React.useState(0);
  console.log("tkcb rerender");

  const dragCheck = React.useCallback((event) => {
    event.preventDefault();
    if (event.clientY < mouseY) {
      stringsDispatch({ type: "INCREASE_FREQUENCY", id: stringID });
    } else if (event.clientY > mouseY) {
      stringsDispatch({ type: "DECREASE_FREQUENCY", id: stringID });
    }
  });

  const clickboxClass = React.useMemo(
    () => `tuningKeyClickBox tuningKeyClickBox__${side}`
  );

  return (
    <div
      draggable="true"
      className={clickboxClass}
      onDragStart={() => {
        initDrag(event);
        setMouseY(event.clientY);
      }}
      onDrag={() => {
        dragCheck(event);
        setMouseY(event.clientY);
      }}
      onDragEnd={endDrag}
    >
      <TuningKey side={side}></TuningKey>
    </div>
  );
});

TuningKeyClickBox.propTypes = {
  stringID: PropTypes.number,
  side: PropTypes.string,
};

export default TuningKeyClickBox;
