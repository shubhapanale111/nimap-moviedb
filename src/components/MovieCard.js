import React from "react";
import { Link } from "react-router-dom";
import { MOVIE_POSTER_IMG, NoImage } from "../utils/Config";
import '../pages/style.css'; // Import the CSS file

const MovieCard = ({ movieObj }) => {
  const { title, poster_path, overview, vote_average, id } = movieObj;

  return (
    <div className="movie-container">
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        {poster_path ? (
          <img
            className="movie-poster"
            src={MOVIE_POSTER_IMG + poster_path}
            alt={title}
          />
        ) : (
          <NoImage />
        )}
        <div className="movie-info">
          <h1 className="movie-title">{title}</h1>
          <p className="movie-overview">{overview}</p>
          <div className="movie-rating">
            <span className="rating-score">{vote_average}</span>
            <i className="fas fa-star rating-icon"></i>
          </div>
         
        </div>
      
      </Link>
    </div>
    <p style={{color:'white',paddingTop:'5px'}}>{title}</p>
    <p style={{color:'white',marginTop:'-5px'}}>Rating: {vote_average}</p>
    </div>
  );
};

export default MovieCard;
