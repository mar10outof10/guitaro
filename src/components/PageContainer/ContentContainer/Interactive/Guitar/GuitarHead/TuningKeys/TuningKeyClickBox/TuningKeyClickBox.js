import "./TuningKeyClickBox.scss";
import TuningKey from "./TuningKey/TuningKey.js";
import React from "react";
import NoteIcon from "../../../../../../../../assets/images/note_icon.png";

const TuningKeyClickBox = ({ side }) => {
  const freqReducer = (state, action) => {
    switch (action.type) {
      case "INCREASE_FREQ":
        return state + 1;
      case "DECREASE_FREQ":
        return state - 1;
    }
  };
  const [freq, freqDispatch] = React.useReducer(freqReducer, 1);

  const [mouseY, setMouseY] = React.useState(0);

  const [dragState, setDragState] = React.useState(null);

  const image = React.useRef(null);
  React.useEffect(() => {
    image.current = new Image();
    image.current.src = NoteIcon;
  }, []);

  const initMouseDown = (event) => {
    console.log("ye");
    event.target.style.cursor = image.current;
    event.dataTransfer.setDragImage(image.current, 0, 20);
    setMouseY(event.clientY);
  };

  const initMouseUp = (event) => {
    console.log("mouseup");
  };

  const dragCheck = (event) => {
    event.preventDefault();
    console.log("yiss");
    console.log(`${mouseY} ${event.clientY} freq ${freq}`);
    if (event.clientY < mouseY) {
      setDragState("UP");
      freqDispatch({ type: "INCREASE_FREQ" });
    } else if (event.clientY > mouseY) {
      setDragState("DOWN");
      freqDispatch({ type: "DECREASE_FREQ" });
    }
    setMouseY(event.clientY);
    console.log(`new freq ${freq}`);
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
