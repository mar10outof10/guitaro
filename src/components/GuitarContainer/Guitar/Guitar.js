import "./Guitar.scss";
import GuitarHead from "components/GuitarHead/GuitarHead.js";
import GuitarNeck from "components/GuitarNeck/GuitarNeck.js";

const Guitar = () => {
  return (
    <div className="guitar">
      <GuitarHead />
      <GuitarNeck />
    </div>
  );
};

export default Guitar;
