import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState(0);
  const [finalAns, setFinalAns] = useState(0);

  let ans = 0;

  for (let i = 0; i <= input; i++) {
    ans += i;
  }
  console.log("Calculating ans again", ans);

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
      Sum of 1 till {input}: {finalAns}
      <br />I am a counter: {cnt}
      <button onClick={updateCounter}>Click Me</button>
    </div>
  );
};

export default App;
