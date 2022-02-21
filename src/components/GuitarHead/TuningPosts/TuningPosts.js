import "./TuningPosts.scss";
import TuningPost from "./TuningPost/TuningPost.js";

const TuningPosts = () => {
  return (
    <div className="tuningPosts">
      <div className="tuningPosts__column">
        <TuningPost id="3" />
        {/* Guitar strings start from bottom left therefore top left is string 3*/}
        <TuningPost id="2" />
        <TuningPost id="1" />
      </div>
      <div className="tuningPosts__column">
        <TuningPost id="4" />
        <TuningPost id="5" />
        <TuningPost id="6" />
      </div>
    </div>
  );
};

export default TuningPosts;
