import React from "react";
import { useState } from "react";
import ShowHobbies from "./ShowHobbies";

const HobbiesList = () => {
  const hobbies = ["Cricket", "Dancing", "Singing", "Coding", "Football"];
  const [selectedHobbies, setSelectedHobbies] = useState([
    "Cricket",
    "Dancing",
  ]);

  const toggleHobby = (h) => {
    setSelectedHobbies((prevHobbies) => {
      if (prevHobbies.includes(h)) {
        return prevHobbies.filter((item) => item !== h);
      } else {
        return [...prevHobbies, h];
      }
    });
  };

  return (
    <div>
      {/* Check box to take input of hobbies that user have */}
      Select your hobbies
      <ShowHobbies
        hobbies={hobbies}
        selectedHobbies={selectedHobbies}
        toggleHobby={toggleHobby}
      ></ShowHobbies>
      {/* Showcase all the hobbies that a user has selected */}
      <div>You have selected: {selectedHobbies.join(" , ") || "NA"} </div>
    </div>
  );
};

export default HobbiesList;
