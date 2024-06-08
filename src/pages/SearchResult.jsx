import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext'; // Adjust the path as necessary
import MovieCard from '../components/MovieCard'; // Adjust the path as necessary
import '../pages/style.css'; // Import the CSS file
import Pagination from '../components/Pagination';

const SearchResult = () => {
  const { movieData } = useContext(MovieContext);

  return (
    <main className="home-container">
      <div className="movie-grid">
        {movieData.results.map((movie) => (
          <MovieCard key={movie.id} movieObj={movie} />
        ))}
      </div>
      <div className="pagination"><Pagination /></div>
    </main>
  );
};

export default SearchResult;
