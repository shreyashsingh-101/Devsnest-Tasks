import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../actions";

const ListTodos = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <>
      <div className="notodo">{todos.length === 0 ? "No Todos Added" : ""}</div>
      {todos.map((todo, index) => (
        <div className="list-todo">
          <h5>{todo.title}</h5>
          <button
            onClick={() => {
              dispatch(removeItem(index));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default ListTodos;
