import "./TuningPost.scss";

const TuningPost = (props) => {
  let tuningClasses = `tuningPost tuningPost__${props.string}`;

  return <div className={tuningClasses} onClick={console.log("bleh")}></div>;
};

export default TuningPost;
