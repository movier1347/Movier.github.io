import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "./reviewForm";
import WrittenReviews from "./WrittenReviews";
function Review(props) {

const API_URL = `https://www.omdbapi.com?apikey=95bc6fb5`;

const [movieInfo, setMovieInfo] = useState({});
const [reviews, setReviews] = useState([{user: "Santiago Londono",
 revTitle: "Majestic",
  review: "This was a great movie, I'll watch again for sure.",
   date: "2022/12/04"}]);
 
const params = useParams();
const ID = params.movieId;

    const searchMovie = async(id) => { 
        if(id.length === 0){}
        else{

            const response = await fetch(`${API_URL}&i=${id}`);
            const data = await response.json();
            //console.log(data);
            
            setMovieInfo(data);
        }
    }
    useEffect(() =>{
        searchMovie(ID)
    },[]);

    


  return (
    <>
    <div className="container-abt">

      <div className="movie-info-container">
        <div className="poster-info">
        <img
          src={
            movieInfo.Poster !== "N/A"
              ? movieInfo.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movieInfo.Title}
        />
        </div>
        <div className="info-container">
          <h2 className="">{movieInfo.Title}</h2>
          <div className="general">
            <h4 className="rating">IMDB: {
            movieInfo.Ratings? movieInfo.Ratings[0].Value:""
            }</h4>
            <h4 className="runtime">{movieInfo.Runtime}</h4>
            <h4 className="year">{movieInfo.Year}</h4>
          </div>
          <p className="plot">{movieInfo.Plot}</p>
          <p>Genre: {movieInfo.Genre}</p>
          <p>Director: {movieInfo.Director}</p>
          <p>Actors: {movieInfo.Actors}</p>

        </div>

      </div>
        <h2 style={{marginTop:"4rem"}}>Reviews</h2>
        <div className="review">
          <ReviewForm reviews={reviews} user={props.user} setReviews={setReviews}></ReviewForm>
        </div>

        <div className="past-reviews">
          {reviews.map((review) =>(
            <WrittenReviews review={review} ></WrittenReviews>
          ))}
        </div>
    </div>
    </>
  );
}

export default Review;