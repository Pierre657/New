import React from "react";
import Chuck from "./components/Chuck";

function App() {
  return (
    <div className="hey">
      <h2
        style={{ textAlign: "center", backgroundColor: "orange" }}
        className="navbar"
      >
        <Chuck></Chuck>
        Les nouvelles tablettes très performantes de la gammes{" "}
        <span className="belle">Elite</span>
      </h2>
      <div className="logo"></div>
      <div className="logo2"></div>
      <h4 className="title">
        <a href="https://www.microsoft.com/fr-fr/">
          Nos produits sont disponibles dès maintenant!
        </a>
      </h4>
      <div className="flex">
        <div className="flex1"></div>
        <div className="flex2"></div>
        <div className="flex3"></div>
        <div className="flex4"></div>
      </div>
    </div>
  );
}

export default App;
