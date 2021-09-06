import React from "react";
import "./App.css";
import AddTodos from "./components/AddTodos";
import ListTodos from "./components/ListTodos";

function App() {
 return (
    <div className="App">
      <div className="container">
      <h1>Todo List</h1>
      <AddTodos />
      <ListTodos />
      </div>
      
    </div>
  );
}

export default App;
