import React from "react";
import "./App.css";
import { useCustom } from "./useCustom";

function App() {
  const numb = useCustom(0);
  return (
    <div className="App">
      <div className="heading">Use of Custom Hooks</div>
      <div className="container">
        <div className="l_operations">
          <button onClick={numb.increment}>Increment</button>
          <button onClick={numb.decrement}>Decrement</button>
          <button onClick={numb.zero}>Set to Zero</button>
        </div>
        <div className="value">{numb.state}</div>
        <div className="r_operations">
          <button onClick={numb.twice}>Multiply by 2</button>
          <button onClick={numb.thrice}>Multiply by 3</button>
          <button onClick={numb.half}>Divide by 2</button>
        </div>
      </div>
      <div className="setInput">
        <input
          type="number"
          placeholder="Set Value"
          onChange={(e) =>
            numb.setState(
              e.target.value.length > 0 ? parseInt(e.target.value) : 0
            )
          }
        />
      </div>
    </div>
  );
}

export default App;
