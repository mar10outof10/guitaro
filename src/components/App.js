import "./App.scss";
import React from "react";
import Header from "components/Header/Header.js";
import PageContainer from "components/PageContainer/PageContainer.js";

function App() {
  return (
    <div className="app" draggable="false">
      <Header />
      <PageContainer />
    </div>
  );
}

export default App;
