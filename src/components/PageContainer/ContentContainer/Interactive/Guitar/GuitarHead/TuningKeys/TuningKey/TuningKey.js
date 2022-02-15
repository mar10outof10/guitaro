import "./TuningKey.scss";

const TuningKey = (props) => {
  let tuningClasses = `tuningKey tuningKey__${props.side}`;

  return <div className={tuningClasses}></div>;
};

export default TuningKey;
