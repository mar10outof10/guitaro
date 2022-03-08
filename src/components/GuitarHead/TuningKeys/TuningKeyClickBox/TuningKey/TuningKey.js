import "./TuningKey.scss";
import React from "react";
import PropTypes from "prop-types";

const TuningKey = ({ side }) => {
  let tuningClasses = `tuningKey tuningKey__${side}`;

  return <div className={tuningClasses}></div>;
};

TuningKey.propTypes = {
  side: PropTypes.string,
};

export default TuningKey;
