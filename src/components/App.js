import "./App.scss";
import React from "react";
import Header from "./Header/Header.js";
import PageContainer from "./PageContainer/PageContainer.js";
import Footer from "./Footer/Footer.js";

function App() {
  return (
    <div className="app">
      <Header />
      <PageContainer />
      <Footer />
    </div>
  );
}

export default App;
