import "./TuningKeyContainer.scss";
import React from "react";
import PropTypes from "prop-types";
import TuningKey from "./TuningKey/TuningKey.js";
import TuningKeyClickBox from "./TuningKeyClickBox/TuningKeyClickBox.js";

const TuningKeyContainer = React.memo(function TuningKeyContainer({
  stringID,
  side,
}) {
  return (
    <div className="tuningKeyContainer">
      <TuningKeyClickBox side={side} stringID={stringID} />
      <TuningKey side={side} />
    </div>
  );
});

TuningKeyContainer.propTypes = {
  stringID: PropTypes.number,
  side: PropTypes.string,
};

export default TuningKeyContainer;
