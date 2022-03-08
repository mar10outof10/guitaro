import "./TuningPost.scss";
import PropTypes from "prop-types";

const TuningPost = (props) => {
  let tuningClasses = `tuningPost tuningPost__${props.id}`;

  return <div className={tuningClasses}></div>;
};

TuningPost.propTypes = {
  id: PropTypes.string,
};

export default TuningPost;
