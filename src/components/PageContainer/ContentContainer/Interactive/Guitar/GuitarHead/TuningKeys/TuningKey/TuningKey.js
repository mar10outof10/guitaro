import "./TuningKey.scss";
import React from "react";

const TuningKey = ({ side }) => {
  let tuningClasses = `tuningKey tuningKey__${side}`;

  return <div className={tuningClasses}></div>;
};

export default TuningKey;
