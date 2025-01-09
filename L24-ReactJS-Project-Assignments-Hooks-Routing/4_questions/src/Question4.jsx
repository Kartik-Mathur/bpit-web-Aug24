import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Question4 = () => {
  const inpRef = useRef();

  useEffect(() => {
    inpRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inpRef} type="text" id="inp" placeholder="Enter name" />
    </div>
  );
};

export default Question4;
