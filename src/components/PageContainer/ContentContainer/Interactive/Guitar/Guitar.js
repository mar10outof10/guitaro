import "./Guitar.scss";
import GuitarHead from "./GuitarHead/GuitarHead.js";
import GuitarNeck from "./GuitarNeck/GuitarNeck.js";

const Guitar = () => {
  return (
    <div className="guitar">
      <GuitarHead />
      <GuitarNeck />
    </div>
  );
};

export default Guitar;
