import "./TuningKey.scss";
import React from "react";
import PropTypes from "prop-types";

const TuningKey = React.memo(function TuningKey({ side, position }) {
  let tuningClasses = `tuningKey tuningKey__${side}`;

  let remainder = position % 1;

  const style = { height: `${remainder * 88 + 12}%` };

  return <div className={tuningClasses} style={style}></div>;
});

TuningKey.propTypes = {
  side: PropTypes.string,
  position: PropTypes.number,
};

export default TuningKey;
