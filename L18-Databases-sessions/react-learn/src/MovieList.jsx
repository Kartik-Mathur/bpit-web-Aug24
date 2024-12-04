import React from "react";

const MovieList = () => {
  const movies = ["Hulk", "Thor", "Ironman", "Batman"];

  return (
    <div>
      <ul className="movieList">
        Movies
        {movies.map((m) => (
          <li>{m}</li>
        ))}
      </ul>

      
    </div>
  );
};

export default MovieList;
