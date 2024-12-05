import React, { useState } from "react";

const Child = () => {
  console.log("Child rendered");
  return <div>Child Component</div>;
};

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child />
    </div>
  );
};

export default Parent;