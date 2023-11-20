import React from "react";
import "../css/Movie.css";

function Movie({ title, imagePath }) {
  const imgSrc = `https://image.tmdb.org/t/p/original${imagePath}`;
  return (
    <li>
      <img src={imgSrc} alt="Movie Cover" />
      <span>{title}</span>
    </li>
  );
}

export default Movie;
