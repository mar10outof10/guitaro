import "./App.scss";
import React from "react";
import Header from "./Header/Header.js";
import PageContainer from "./PageContainer/PageContainer.js";

function App() {
  return (
    <div className="app" draggable="false">
      <Header />
      <PageContainer />
    </div>
  );
}

export default App;
