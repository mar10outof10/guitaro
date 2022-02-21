import "./TuningPost.scss";

const TuningPost = (props) => {
  let tuningClasses = `tuningPost tuningPost__${props.id}`;

  return <div className={tuningClasses}></div>;
};

export default TuningPost;
