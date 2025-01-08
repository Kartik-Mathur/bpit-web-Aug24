import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState(0);
  const [cnt, setCount] = useState(0);

  let ans = useMemo(
    function () {
      console.log("Calculating ans");
      let x = 0;
      for (let i = 0; i <= input; i++) {
        x += i;
      }
      return x;
    },
    [input]
  );

  // Counter update logic
  const updateCounter = () => {
    setCount(cnt + 1);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter N"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br />
      Sum of 1 till {input}: {ans}
      <br />I am a counter: {cnt}
      <button onClick={updateCounter}>Click Me</button>
    </div>
  );
};

export default App;
