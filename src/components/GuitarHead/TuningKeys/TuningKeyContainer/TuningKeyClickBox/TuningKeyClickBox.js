import "./TuningKeyClickBox.scss";

import React from "react";
import { useStrings } from "hooks/stringsContext";
import PropTypes from "prop-types";
import { initDrag } from "utils/tuningFunctions";

import { throttle } from "lodash";

const TuningKeyClickBox = React.memo(function TuningKeyClickBox({
  positionDispatch,
  stringID,
  side,
}) {
  const { stringsDispatch } = React.useCallback(useStrings());
  const [mouseY, setMouseY] = React.useState(0);

  const dragCheck = React.useCallback((event) => {
    const clientY =
      event.clientY !== undefined ? event.clientY : event.touches[0].clientY; // event.clientY only has a value when mouse is used, touch screen gives undefined
    console.log(clientY);
    if (clientY === 0) {
      return; // onDrag fires one last time on dragEnd with a clientY of 0, this avoids side-effects.
    }
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
      onDrag={throttle((event) => {
        dragCheck(event);
        setMouseY(event.clientY);
      }, 40)}
      onTouchStart={(event) => {
        setMouseY(event.touches[0].clientY);
      }}
      onTouchMove={throttle((event) => {
        dragCheck(event);
        setMouseY(event.touches[0].clientY);
      }, 40)}
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
