import React from "react";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const name = "Daksh Lohia";
  // Change the name after 1-2 seconds
  const nameRef = useRef();

  useEffect(() => {
    console.log(nameRef.current);
    setTimeout(()=>{
      nameRef.current.innerText = "Faaiz";
    }, 2000);
  }, []);

  return (
    <div>
      Welcome to Coding Blocks!{" "}
      <span ref={nameRef} id="name">
        {name}
      </span>
    </div>
  );
};

/*
const App = () => {
  const [name, setName] = useState("Daksh Lohia");
  // Change the name after 1-2 seconds

  useEffect(() => {
    setTimeout(() => {
      setName("Faaiz");
    }, 2000);
  }, []);

  return <div>Welcome to Coding Blocks! {name}</div>;
};
*/

/* Way - 2: Not the right way to update DOM
const App = () => {
  const name = "Daksh Lohia";

  // Change the name after 1-2 seconds

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("name").innerText = "Faaiz";
      console.log(document.getElementById('name'));
      // ReactJs ko pata nahi chlega yeh kia hai humne!
      // This should be avoided.. kaam toh krega obviously
    }, 2000);
  }, []);

  return (
    <div>
      Welcome to Coding Blocks! <span id="name">{name}</span>
    </div>
  );
};
*/

export default App;
