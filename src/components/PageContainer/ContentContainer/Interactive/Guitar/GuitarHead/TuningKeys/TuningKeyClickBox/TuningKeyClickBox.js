import "./TuningKeyClickBox.scss";
import TuningKey from "./TuningKey/TuningKey.js";
import React from "react";
import Logo from "../../../../../../../../assets/images/guitaro_logo_header.png";

const Icon = () => {
  return <img src={logo}></img>;
};

const TuningKeyClickBox = ({ side }) => {
  const freqReducer = (state, action) => {
    switch (action.type) {
      case "INCREASE_FREQ":
        return state + 1;
      case "DECREASE_FREQ":
        return state - 1;
    }
  };
  const [freq, dispatch] = React.useReducer(freqReducer, 1);

  const [mouseY, setMouseY] = React.useState(0);

  const dragImg = Logo;

  const image = React.useRef(null);
  React.useEffect(() => {
    image.current = new Image();
    image.current.src = Logo;
  }, []);

  const initMouseDown = (event) => {
    console.log("ye");
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setDragImage(image.current, 0, 0);
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
      dispatch({ type: "INCREASE_FREQ" });
    } else if (event.clientY > mouseY) {
      dispatch({ type: "DECREASE_FREQ" });
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
      {freq}
      <TuningKey side={side}></TuningKey>
    </div>
  );
};

export default TuningKeyClickBox;
