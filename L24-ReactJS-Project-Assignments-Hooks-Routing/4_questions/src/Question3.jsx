import React from "react";
import { memo } from "react";
import { useCallback } from "react";
import { useState } from "react";

const Question3 = () => {
  const [counter, setCounter] = useState(0);
  /*
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  */

  /*
  const increaseCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const decreaseCounter = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);
    */

  const increaseCounter = useCallback(() => {
    setCounter((prevValue) => prevValue + 1);
  }, []);

  const decreaseCounter = useCallback(() => {
    setCounter((prevValue) => {
      return prevValue - 1;
    });
  }, []);

  return (
    <div>
      Counter: {counter} <br />
      <Button text="Inc" onClick={increaseCounter} />
      <Button text="Dec" onClick={decreaseCounter} />
    </div>
  );
};

const Button = memo(({ text, onClick }) => {
  console.log("Rendering Button");
  return <button onClick={onClick}>{text}</button>;
});

export default Question3;
