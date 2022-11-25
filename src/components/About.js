import React from "react";

function About(props) {
  return (
    <>
      <h1 className="about-page-h1">The MOVIER</h1>

      <h3>How to:</h3>
      <ol className = "ol-how-to">
        <li>Search for Movies</li>
          <p>Search for a Movie on the Search Movie page and click the (*insert icon) icon </p>
        <li>Choose Movie to Save</li>
          <p>Hover over the movie you want to watch later and click Add Movie</p>
        <li>View your 'To Watch Movies' </li>
        <p> To view all your movies you have saved click To Watch </p>
      </ol>
      <p className="about-page-p">
       
      </p>
    </>
  );
}

export default About;
