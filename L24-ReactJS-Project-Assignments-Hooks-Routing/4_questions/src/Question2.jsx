import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const generateNumbers = () => {
  return Array.from({ length: 500 }, () => Math.floor(Math.random() * 100) + 1);
};

const Question2 = () => {
  const [num, setNum] = useState(generateNumbers());
  const [input, setInput] = useState(0);

  const data = useMemo(() => {
    const searchNum = Number(input);
    if(searchNum == 0) return num;

    return num.filter((n) => n == searchNum);
  }, [num, input]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a number"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br />
      {data.map((n, index) => (
        <li key={index}>{n}</li>
      ))}
    </div>
  );
};

export default Question2;
