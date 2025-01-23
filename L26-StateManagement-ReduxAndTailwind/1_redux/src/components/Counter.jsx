import React from "react";
import { useDispatch, useSelector } from "react-redux";
import counterIncrement from "../actions/counter/counterIncrement.action";
import counterDecrement from "../actions/counter/counterDecrement.action";

const Counter = () => {
  const dispatch = useDispatch();
  const cnt = useSelector((state) => state.counterReducer);

  return (
    <div>
      <button onClick={() => dispatch(counterDecrement)}>Decrease</button>{" "}
      {cnt.value}{" "}
      <button onClick={() => dispatch(counterIncrement)}>Increase</button>
    </div>
  );
};

export default Counter;
