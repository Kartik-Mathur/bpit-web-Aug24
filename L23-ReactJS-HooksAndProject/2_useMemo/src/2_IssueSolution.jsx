import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState(0);

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
      <br />
      <Counter />
    </div>
  );
};

export default App;

// Way 1 create counter in a separate component.
function Counter() {
  const [cnt, setCount] = useState(0);
  // Counter update logic
  const updateCounter = () => {
    setCount(cnt + 1);
  };

  return (
    <>
      I am a counter: {cnt} <button onClick={updateCounter}>Click Me</button>;
    </>
  );
}
