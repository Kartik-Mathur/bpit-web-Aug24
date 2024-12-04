import { useState } from "react";
import "./App.css";

function App() {
  /* 
  let a = 1;
  function updateValue() {
    a++;
    console.log(a);
  }
  */

  // Hook: useState
  // const [state, useState] = useState(initVal);
  const [a, setA] = useState(0);
  // a: it is immutable, we cannot do a = a+1, or a++
  // we can only update a value with setA
  function updateValue() {
    setA(a + 1);
  }

  return (
    <div>
      Counter : <span>{a}</span>
      <button onClick={updateValue}>Update A</button>
    </div>
  );
}

export default App;
