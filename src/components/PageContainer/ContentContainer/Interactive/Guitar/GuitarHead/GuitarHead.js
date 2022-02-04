import "./GuitarHead.scss";
import TuningKeys from "./TuningKeys/TuningKeys.js";
import TuningPosts from "./TuningPosts/TuningPosts.js";
import HeadStrings from "./HeadStrings/HeadStrings.js";

const GuitarHead = () => {
  return (
    <div className="guitarHead">
      <TuningKeys />
      <TuningPosts />
      <HeadStrings />
    </div>
  );
};

export default GuitarHead;
