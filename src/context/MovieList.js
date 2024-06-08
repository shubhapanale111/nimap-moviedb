import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from './MovieContext'; // Adjust the import path accordingly

const MovieList = () => {
  const { type } = useParams();
  const { movieData, changeMovieListType } = useContext(MovieContext);

  useEffect(() => {
    changeMovieListType(type);
  }, [type, changeMovieListType]);

  return (
    <div>
      <h1>{type.replace('_', ' ').toUpperCase()}</h1>
      <ul>
        {movieData.results.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
