import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultImage from '../Images/defaultProfile.png'
import "./moviedetails.css";


const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [credits, setCredits] = useState({ cast: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setError("Error fetching movie details.");
      } finally {
        setLoading(false);
      }
    };

    const fetchCredits = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCredits(data);
      } catch (error) {
        setError("Error fetching credits.");
      }
    };

    fetchMovieDetails();
    fetchCredits();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
   
    <div className="movie-details-container">
      <div className="first-row">
        <div className="first-sub-row">
          <div className="first-sub-row1">
            <div className="first-sub-row1-col1">
              <div className="sub-col1">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
                  alt={movieDetails.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover",borderRadius:'8px' }}
                />
              </div>
              <div className="sub-col2">
                <h3>{movieDetails.title}</h3>

                <p>Rating : {movieDetails.vote_average}/10</p>

                <p>Language : English</p>

                <p>Release Date : {movieDetails.release_date}</p>
              </div>
            </div>
            <div className="first-sub-row1-col2">
              <h3 style={{ color: "white", textAlign: "start" }}>Overview</h3>
              <p>{movieDetails.overview}</p>
            </div>
          </div>
          <div className="first-sub-row2">
        <div className="backup-path">

            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
             
            />
            </div>
          </div>
        </div>
      </div>
      <div className="second-row">
  <h2>Cast</h2>
  {/* <ul className="cast-list">
    {credits.cast.map(actor => (
      <li className="cast-card" key={actor.cast_id}>
        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} className="cast-image" />
        <h3 className="cast-name">{actor.name}</h3>
        <p className="cast-character">Character: {actor.character}</p>
      </li>
    ))}
  </ul> */}
  <ul className="cast-list">
      {credits.cast.map(actor => (
        <li className="cast-card" key={actor.cast_id}>
          <img
            src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : defaultImage}
            alt={actor.name}
            className="cast-image"
            onError={(e) => { e.target.src = defaultImage; }}
          />
          <h3 className="cast-name">{actor.name}</h3>
          <p className="cast-character">Character: {actor.character}</p>
        </li>
      ))}
    </ul>
</div>

    </div>
  );
};

export default MovieDetails;
