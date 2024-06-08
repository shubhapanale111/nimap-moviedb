import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext'; // Adjust the path as necessary
import MovieCard from '../components/MovieCard'; // Adjust the path as necessary
import '../pages/style.css'; // Import the CSS file
import Pagination from '../components/Pagination';
import Paginationn from '../components/Pagination';

const Home = () => {
  const { movieData } = useContext(MovieContext);

  return (
    <main className="home-container">
      
      <div className="movie-grid">
        {movieData.results.map((movie) => (
          <MovieCard key={movie.id} movieObj={movie} />
        ))}
      </div>
      <div className="pagination"><Paginationn /></div>
      
    </main>
  );
};

export default Home;
