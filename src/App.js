import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
      </div>
      <footer className="App-footer">
        <small>
          This app was coded by Joanne Mukoko and is open-sourced on Github
        </small>
      </footer>
    </div>
  );
}

export default App;
