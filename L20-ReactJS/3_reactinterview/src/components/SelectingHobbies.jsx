import React, { useState } from "react";

const SelectingHobbies = () => {
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
      <div>
        {hobbies.map((h, indx) => (
          <div
            key={indx}
            style={{
              margin: "10px",
            }}
          >
            <input
              type="checkbox"
              checked={selectedHobbies.includes(h)}
              onChange={() => toggleHobby(h)}
            />
            {h}
          </div>
        ))}
      </div>
      {/* Showcase all the hobbies that a user has selected */}
      <div>You have selected: {selectedHobbies.join(" , ") || "NA"} </div>
    </div>
  );
};

function ShowHobbies(props) {
  const { hobbies } = props;
  return (
    <div>
      {hobbies.map((h, indx) => (
        <div
          key={indx}
          style={{
            margin: "10px",
          }}
        >
          <input type="checkbox" />
          {h}
        </div>
      ))}
    </div>
  );
}

export default SelectingHobbies;
