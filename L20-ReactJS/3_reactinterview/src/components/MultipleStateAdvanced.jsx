import React from "react";
import { useState } from "react";

const MultipleState = () => {
  // We are learning to take input from the user inside reactJS
  // React always know what you have entered inside an input element,
  // Since we are updating state onChange of input immediately
  const [person, setPerson] = useState({
    name: "",
    age: "",
    email: "",
  });

  const updateValue = (key, value) => {
    setPerson((prevPerson) => {
      return { ...prevPerson, [key]: value };
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => updateValue("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter age"
        onChange={(e) => updateValue("age", e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter email"
        onChange={(e) => updateValue("email", e.target.value)}
      />

      <div style={{
        backgroundColor: 'orange'
      }}>You have entered name: {person.name}</div>
      <div>You have entered age: {person.age}</div>
      <div>You have entered email: {person.email}</div>
    </div>
  );
};

export default MultipleState;
