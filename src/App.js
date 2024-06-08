import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MovieProvider } from './context/MovieContext';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import SearchResult from './pages/SearchResult';
import NavScrollExample from './header/Navbar';
import Footer from './header/Footer';

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="App">
          <NavScrollExample/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/movies/:type" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
