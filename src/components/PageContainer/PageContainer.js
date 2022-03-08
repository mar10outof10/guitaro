import "./PageContainer.scss";
import React from "react";
import ContentContainer from "./ContentContainer/ContentContainer.js";

const PageContainer = React.memo(function PageContainer() {
  return (
    <div className="pageContainer">
      <ContentContainer />
    </div>
  );
});

export default PageContainer;
