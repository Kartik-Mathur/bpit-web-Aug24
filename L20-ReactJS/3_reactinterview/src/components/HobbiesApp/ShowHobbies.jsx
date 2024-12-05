import React from 'react'

const ShowHobbies = (props) => {
    const { hobbies, selectedHobbies, toggleHobby } = props;
    return (
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
    );
}

export default ShowHobbies
