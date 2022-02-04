import "./Guitar.scss";
import GuitarHead from "../GuitarHead/GuitarHead.js";
import Neck from "../Neck/Neck.js";
import Bridge from "../Bridge/Bridge.js";

const Guitar = () => {
  return (
    <div className="guitar">
      <GuitarHead />
      <Bridge />
      <Neck />
    </div>
  );
};

export default Guitar;
