import React from "react";
import { useState } from "react";

const MultipleState = () => {
  // We are learning to take input from the user inside reactJS
  // React always know what you have entered inside an input element,
  // Since we are updating state onChange of input immediately
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const updateName = (e) => {
    console.log("You are typing....", e.target.value);
    setName(e.target.value);
  };

  const updateAge = (e) => {
    setAge(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter name" onChange={updateName} />
      <input type="text" placeholder="Enter age" onChange={updateAge} />
      <input type="text" placeholder="Enter email" onChange={updateEmail} />

      <div>You have entered name: {name}</div>
      <div>You have entered age: {age}</div>
      <div>You have entered email: {email}</div>
    </div>
  );
};

export default MultipleState;
