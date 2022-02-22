import "./TuningKeyClickBox.scss";
import TuningKey from "./TuningKey/TuningKey.js";
import React from "react";
import NoteIcon from "../../../../assets/images/note_icon.png";
import { useStrings } from "../../../../hooks/stringsContext";

const TuningKeyClickBox = ({ stringID, side }) => {
  const { strings, stringsDispatch } = useStrings();
  const [mouseY, setMouseY] = React.useState(0);

  const image = React.useRef(null);
  React.useEffect(() => {
    image.current = new Image();
    image.current.src = NoteIcon;
  }, []);

  const initMouseDown = (event) => {
    console.log("mousedown");
    event.target.style.cursor = image.current;
    event.dataTransfer.setDragImage(image.current, 0, 20);
    setMouseY(event.clientY);
  };

  const initMouseUp = (event) => {
    console.log("mouseup");
  };

  const dragCheck = (event) => {
    event.preventDefault();
    if (event.clientY < mouseY) {
      stringsDispatch({ type: "INCREASE_FREQUENCY", id: stringID });
    } else if (event.clientY > mouseY) {
      stringsDispatch({ type: "DECREASE_FREQUENCY", id: stringID });
    }
    setMouseY(event.clientY);
    console.log(
      `string ${stringID} new freq ${strings[stringID - 1].frequency}`
    );
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
};

export default TuningKeyClickBox;
