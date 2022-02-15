import "./TuningKeys.scss";
import TuningKey from "./TuningKey/TuningKey.js";

const TuningKeys = () => {
  return (
    <div className="tuningKeys">
      <div className="tuningKeys__column">
        <TuningKey side="left" />
        <TuningKey side="left" />
        <TuningKey side="left" />
      </div>
      <div className="tuningKeys__column">
        <TuningKey side="right" />
        <TuningKey side="right" />
        <TuningKey side="right" />
      </div>
    </div>
  );
};

export default TuningKeys;
