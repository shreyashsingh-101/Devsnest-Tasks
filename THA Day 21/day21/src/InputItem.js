import React from "react";
import { useState } from "react";

function InputItem(props) {
  const { items, setItems } = props;

  const [food, setFood] = useState("");
  const [f_calorie, setF_calorie] = useState("");
  return (
    <div className="input_item">
      <form>
        <div className="inputs">
          <input
            className="foo_name"
            type="text"
            name="foo_name"
            placeholder="Item name"
            onChange={(e) => {
              setFood(e.target.value);
            }}
          />
          <input
            className="calorie"
            type="number"
            name="calorie"
            placeholder="Calorie amount"
            onChange={(e) => {
              setF_calorie(e.target.value);
            }}
          />
        </div>
        <div className="sub_btn">
          <button
            onClick={(e) => {
              e.preventDefault();
              let name_input =
                e.target.parentElement.parentElement.children[0].children[0];
              let calorie_input =
                e.target.parentElement.parentElement.children[0].children[1];

              if (food.length && f_calorie.length) {
                setItems([...items, { name: food, calorie: f_calorie }]);
                setFood("");
                setF_calorie("");
                name_input.value = "";
                calorie_input.value = "";
              }
            }}
            className="add_item"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputItem;
