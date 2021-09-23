import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { updatePlace, updateData } from "../actions/index";

const Input = () => {
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="inputs">
        <input
          value={place}
          onChange={(e) => {
            dispatch(updatePlace(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch(updateData(place));
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default Input;
