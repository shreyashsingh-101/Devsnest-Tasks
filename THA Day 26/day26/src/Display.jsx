import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const username = useSelector((state) => state.user);
  const password = useSelector((state) => state.pass);
  return (
    <div className="display">
      <label>Username: {username} </label>
      <label>Password: {password}</label>
    </div>
  );
};

export default Display;
