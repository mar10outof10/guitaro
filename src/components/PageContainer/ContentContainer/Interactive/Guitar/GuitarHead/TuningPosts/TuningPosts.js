import "./TuningPosts.scss";
import TuningPost from "./TuningPost/TuningPost.js";

const TuningPosts = () => {
  return (
    <div className="tuningPosts">
      <div className="tuningPosts__column">
        <TuningPost string="3" />{" "}
        {/* Guitar strings start from bottom left therefore top left is string 3*/}
        <TuningPost string="2" />
        <TuningPost string="1" />
      </div>
      <div className="tuningPosts__column">
        <TuningPost string="4" />
        <TuningPost string="5" />
        <TuningPost string="6" />
      </div>
    </div>
  );
};

export default TuningPosts;
