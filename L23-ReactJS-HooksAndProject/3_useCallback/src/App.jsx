import React from "react";
import { useCallback } from "react";
import { memo } from "react";
import { useState } from "react";

const App = () => {
  // var a = 1;
  var a = useCallback(function a() {
    console.log("I am a");
  }, []);
  console.log("Parent re-rendered");

  const [cnt, setCnt] = useState(0);

  return (
    <div>
      Count: {cnt}
      <button onClick={() => setCnt(cnt + 1)}>Update CNT</button>
      <br />
      {/* <button
        onClick={() => {
          a++;
          console.log(a);
        }}
      >
        Update A
      </button> */}
      <br></br>
      <Child x={a} />
    </div>
  );
};

const Child = memo(({ x }) => {
  console.log("child re-rendered");
  return <div>Child:</div>;
});

export default App;
