import React from "react";
import { useState } from "react";

const Conditional = () => {
  const morning = true;
  // const isVisible = false;
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisible = ()=>{
    setIsVisible(!isVisible);
  }
  return (
    <div>
      {/* Conditional rendering using Ternary Operator */}
      {morning ? <div>Good Morning</div> : <div>Good Evening</div>}
      {/* Conditional Rendering using && operator */}
      {isVisible && <div>Yes I am visible now</div>}
      
      {/* onClick we need to change the visibility of the 👆🏻 div above */}
      <button onClick = {toggleVisible}>Show</button>
      
    </div>
  );
};

export default Conditional;
