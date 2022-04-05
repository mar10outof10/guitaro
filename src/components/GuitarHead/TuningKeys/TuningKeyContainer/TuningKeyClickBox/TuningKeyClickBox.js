import "./TuningKeyClickBox.scss";

import React from "react";
import { useStrings } from "../../../../../hooks/stringsContext";
import PropTypes from "prop-types";
import { initDrag } from "../../../../../utils/tuningFunctions";

const TuningKeyClickBox = React.memo(function TuningKeyClickBox({
  positionDispatch,
  stringID,
  side,
}) {
  const { stringsDispatch } = React.useCallback(useStrings());
  const [mouseY, setMouseY] = React.useState(0);

  const dragCheck = React.useCallback((event) => {
    event.preventDefault();
    if (event.clientY === 0) {
      return;
    }
    if (event.clientY < mouseY) {
      stringsDispatch({ type: "INCREASE_FREQUENCY", id: stringID });
      positionDispatch({ type: "INCREASE_POSITION" });
    } else if (event.clientY > mouseY) {
      stringsDispatch({ type: "DECREASE_FREQUENCY", id: stringID });
      positionDispatch({ type: "DECREASE_POSITION" });
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
      onDragEnd={(event) => {
        event.preventDefault();
      }}
    ></div>
  );
});

TuningKeyClickBox.propTypes = {
  positionDispatch: PropTypes.func,
  stringID: PropTypes.number,
  side: PropTypes.string,
};

export default TuningKeyClickBox;
