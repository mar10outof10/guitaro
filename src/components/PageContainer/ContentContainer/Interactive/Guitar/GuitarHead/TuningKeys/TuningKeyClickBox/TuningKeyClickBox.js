import "./TuningKeyClickBox.scss";
import TuningKey from "./TuningKey/TuningKey.js";

const TuningKeyClickBox = ({ side }) => {
  const clickboxClass = `tuningKeyClickBox tuningKeyClickBox__${side}`;
  return (
    <div className={clickboxClass}>
      <TuningKey side={side}></TuningKey>
    </div>
  );
};

export default TuningKeyClickBox;
