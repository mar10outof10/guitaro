import "./ContentContainer.scss";
import React from "react";
import GuitarContainer from "components/GuitarContainer/GuitarContainer.js";

const ContentContainer = React.memo(function ContentContainer() {
  return (
    <div className="contentContainer">
      <GuitarContainer />
    </div>
  );
});

export default ContentContainer;
