import React, { useState } from "react";

const CreateTodo = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function addTodo() {
    fetch("http://localhost:4444/todo", {
      method: "POST",
      body: JSON.stringify({
        name,
        description,
      }),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Task Name"
        onChange={(ev) => {
          //   console.log(ev.target.value);
          setName(ev.target.value);
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Enter Description"
        onChange={(ev) => {
          //   console.log(ev.target.value);
          setDescription(ev.target.value);
        }}
      />{" "}
      <br />
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
};

export default CreateTodo;
