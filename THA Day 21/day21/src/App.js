import "./App.css";
import Container from "./Container";
import { useState } from "react";
import InputItem from "./InputItem";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <div className="heading">Calorie Chart</div>
      <InputItem items={items} setItems={setItems} />
      <Container items={items} setItems={setItems} />
    </div>
  );
}

export default App;
