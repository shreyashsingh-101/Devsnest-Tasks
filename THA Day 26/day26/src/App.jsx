import React from "react";
import "./App.css";
import Display from "./Display";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>Using Redux for State Management</h1>
      </div>
      <div className="content">
      <Login />
      <Display />
      </div>
    </div>
  );
}

export default App;
