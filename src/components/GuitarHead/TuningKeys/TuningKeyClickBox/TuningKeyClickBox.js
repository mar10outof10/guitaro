import "./TuningKeyClickBox.scss";
import TuningKey from "./TuningKey/TuningKey.js";
import React from "react";
import NoteIcon from "../../../../assets/images/note_icon.png";
import { useStrings } from "../../../../hooks/stringsContext";
import PropTypes from "prop-types";

const TuningKeyClickBox = React.memo(function TuningKeyClickBox({
  stringID,
  side,
}) {
  const { stringsDispatch } = useStrings();
  const [mouseY, setMouseY] = React.useState(0);
  console.log("tkcb rerender");
  const image = React.useRef(null);
  React.useEffect(() => {
    image.current = new Image();
    image.current.src = NoteIcon;
  }, []);

  const initMouseDown = (event) => {
    console.log("tKey dragStart");
    event.target.style.cursor = image.current;
    event.dataTransfer.setDragImage(image.current, 0, 20);
    setMouseY(event.clientY);
  };

  const initMouseUp = (event) => {
    console.log("tKey dragEnd");
  };

  const dragCheck = (event) => {
    event.preventDefault();
    if (event.clientY < mouseY) {
      stringsDispatch({ type: "INCREASE_FREQUENCY", id: stringID });
    } else if (event.clientY > mouseY) {
      stringsDispatch({ type: "DECREASE_FREQUENCY", id: stringID });
    }
    setMouseY(event.clientY);
  };

  const clickboxClass = `tuningKeyClickBox tuningKeyClickBox__${side}`;
  return (
    <div
      draggable="true"
      className={clickboxClass}
      onDragStart={initMouseDown}
      onDrag={dragCheck}
      onDragEnd={initMouseUp}
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
