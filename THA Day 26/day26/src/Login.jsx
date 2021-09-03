import React from "react";

import { chngUsername, chngPassword } from "./actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="login">
      <form>
        <label>
          Username:
          <input
            onChange={(e) => {
              dispatch(chngUsername(e.target.value));
            }}
            type="text"
            name="username"
          />
        </label>
        <label>
          Password:
          <input
            onChange={(e) => {
              dispatch(chngPassword(e.target.value));
            }}
            type="text"
            name="password"
          />
        </label>
      </form>
    </div>
  );
};

export default Login;
