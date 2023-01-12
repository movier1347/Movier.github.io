import React from "react";
import { Link } from "react-router-dom";


const MovieCard = (props) => {



  function handleClick(title, poster){
    props.addTask(title, poster);
    //console.log("You clicked " + title);
    //console.log("You clicked " + props.movie.imdbID);
  }

  return (
    <div className="movie">
      <div className="AddToWatch">
        <p>{props.movie.Year}</p>
        <h3 onClick={() => handleClick(props.movie.Title, props.movie.Poster)}
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
        <Link style={{ textDecoration: 'none' }} to={"/review/"+props.movie.imdbID}>
          <h3 className="movie-title">{props.movie.Title}</h3>
          </Link>

      </div>

    </div>
  );
};

export default MovieCard;
