import React from "react";
import { memo } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

let ans = 0;
// Total renderings count
const Question5 = () => {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const spanRef = useRef();
  //   useEffect(() => {
  // console.log("Running");
  //   spanRef.current.innerText = +spanRef.current.innerText + 1;
  // setRenderCount((prev) => prev + 1);
  //   }, [count]);

  useEffect(()=>{
    console.log("done");
  })

  ans++;

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={updateCount}> Update</button>
      Counter: {count}
      <div>
        Rendering: <span ref={spanRef}>0</span>
      </div>
      <div>Ans: {ans}</div>
    </>
  );
};

export default Question5;

// const Button = memo(({ updateCount }) => {
//   console.log("Rendering Button");
//   return <button onClick={updateCount}>Update</button>;
// });
