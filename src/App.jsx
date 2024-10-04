import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

function App() {
  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);
  console.log(value);

  return (
    <div>
      <div>
        <div>{value}</div>
        <hr />
        <button onClick={() => dispatch(increment())}>Artir</button>
        <hr />
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
    </div>
  );
}

export default App;
