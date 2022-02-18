import "./TuningKeys.scss";
import TuningKeyClickBox from "./TuningKeyClickBox/TuningKeyClickBox.js";

const TuningKeys = () => {
  return (
    <div className="tuningKeys">
      <div className="tuningKeys__column">
        <TuningKeyClickBox side="left"></TuningKeyClickBox>
        <TuningKeyClickBox side="left"></TuningKeyClickBox>
        <TuningKeyClickBox side="left"></TuningKeyClickBox>
      </div>
      <div className="tuningKeys__column">
        <TuningKeyClickBox side="right"></TuningKeyClickBox>
        <TuningKeyClickBox side="right"></TuningKeyClickBox>
        <TuningKeyClickBox side="right"></TuningKeyClickBox>
      </div>
    </div>
  );
};

export default TuningKeys;
