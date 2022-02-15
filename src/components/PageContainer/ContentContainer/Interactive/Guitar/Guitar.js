import "./Guitar.scss";
import GuitarHead from "./GuitarHead/GuitarHead.js";
import Neck from "./Neck/Neck.js";

const Guitar = () => {
  return (
    <div className="guitar">
      <GuitarHead />
      <Neck />
    </div>
  );
};

export default Guitar;
