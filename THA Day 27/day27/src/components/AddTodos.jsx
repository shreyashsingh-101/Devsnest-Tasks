import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../actions";

const AddTodos = () => {
  const [item, setItem] = useState();
  const dispatch = useDispatch();
  return (
    <div className="add-todos">
      <input
        type="text"
        placeholder="Add Todo...."
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />

      <button
        onClick={() => {
          dispatch(
            addItem({
              title: item,
              done: false,
            })
          );
          setItem("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodos;
