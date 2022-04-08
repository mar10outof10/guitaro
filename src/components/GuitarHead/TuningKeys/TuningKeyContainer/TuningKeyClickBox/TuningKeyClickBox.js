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
    const clientY = event.clientY ? event.clientY : event.touches[0].clientY;
    if (clientY < mouseY) {
      stringsDispatch({ type: "INCREASE_FREQUENCY", id: stringID });
      positionDispatch({ type: "INCREASE_POSITION" });
    } else if (clientY > mouseY) {
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
      onDragStart={(event) => {
        initDrag(event);
        setMouseY(event.clientY);
      }}
      onDrag={(event) => {
        dragCheck(event);
        setMouseY(event.clientY);
      }}
      onTouchStart={(event) => {
        setMouseY(event.touches[0].clientY);
      }}
      onTouchMove={(event) => {
        dragCheck(event);
        setMouseY(event.touches[0].clientY);
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
