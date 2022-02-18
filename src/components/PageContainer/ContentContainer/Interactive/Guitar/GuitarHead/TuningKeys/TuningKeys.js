import "./TuningKeys.scss";
import TuningKey from "./TuningKey/TuningKey.js";

const TuningKeys = () => {
  return (
    <div className="tuningKeys">
      <div className="tuningKeys__column">
        <div className="tuningKeys__clickBox tuningKeys__clickBox__left">
          <TuningKey left={0} y={0} side="left" />
        </div>
        <div className="tuningKeys__clickBox tuningKeys__clickBox__left">
          <TuningKey left={0} y={0} side="left" />
        </div>
        <div className="tuningKeys__clickBox tuningKeys__clickBox__left">
          <TuningKey left={0} y={0} side="left" />
        </div>
      </div>
      <div className="tuningKeys__column">
        <div className="tuningKeys__clickBox tuningKeys__clickBox__right">
          <TuningKey left={0} y={0} side="right" />
        </div>
        <div className="tuningKeys__clickBox tuningKeys__clickBox__right">
          <TuningKey left={0} y={0} side="right" />
        </div>
        <div className="tuningKeys__clickBox tuningKeys__clickBox__right">
          <TuningKey left={0} y={0} side="right" />
        </div>
      </div>
    </div>
  );
};

export default TuningKeys;
