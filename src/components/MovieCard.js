import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";


const MovieCard = (props) => {

  const [name, setName] = useState("");


  function handleClick(title){
    props.addTask(title);
    console.log("You clicked " + title);
  }

  return (
    <div className="movie">
      <div className="AddToWatch">
        <p>{props.movie.Year}</p>
        <h3 onClick={() => handleClick(props.movie.Title)}
        >Add</h3>
      </div>
      
      <div>
        <img
          src={
            props.movie.Poster !== "N/A"
              ? props.movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={props.movie.Title}
        />
      </div>
      <div>
        <span>{props.movie.Type}</span>
        <h3>{props.movie.Title}</h3>

      </div>

    </div>
  );
};

export default MovieCard;
