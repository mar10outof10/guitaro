import "./TuningKeys.scss";
import TuningKeyClickBox from "./TuningKeyClickBox/TuningKeyClickBox.js";

const TuningKeys = () => {
  return (
    <div className="tuningKeys">
      <div className="tuningKeys__column">
        <TuningKeyClickBox stringID={3} side="left"></TuningKeyClickBox>
        <TuningKeyClickBox stringID={2} side="left"></TuningKeyClickBox>
        <TuningKeyClickBox stringID={1} side="left"></TuningKeyClickBox>
      </div>
      <div className="tuningKeys__column">
        <TuningKeyClickBox stringID={4} side="right"></TuningKeyClickBox>
        <TuningKeyClickBox stringID={5} side="right"></TuningKeyClickBox>
        <TuningKeyClickBox stringID={6} side="right"></TuningKeyClickBox>
      </div>
    </div>
  );
};

export default TuningKeys;
