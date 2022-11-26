import React from "react";

function About(props) {
  return (
    <>
      <h1 className="about-page-h1">The MOVIER</h1>

      <h3>How to:</h3>
      <ol className="ol-how-to">
        <li>Search for Movies</li>
        <p>
          Search for a Movie on the Search Movie by typing in the movie or tv
          series into the seach bar.
        </p>
        <p> Then click the 'ADD' icon on the movie you wish to save.</p>
        <li>Movie is Saved</li>
        <p>Click on the 'To Watch' link in the top navigation bar</p>
        <li>View your 'To Watch' Movies </li>
        <p>
          {" "}
          To view all your movies you have saved, click... (ALL), are about to
          watch, click... (ACTIVE), have watched, click... (COMPLETED)
        </p>
        <li>Delete Movie(s) </li>
        <p>
          If you wish to delete a movie, choose the movies checkbox and then
          click delete. If yopu wish to delete all movies, click on the 'Clear
          all movies' button at the bottom on the form
        </p>
      </ol>
      <p className="about-page-p"></p>
    </>
  );
}

export default About;