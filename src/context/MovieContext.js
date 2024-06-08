// import React, { createContext, useEffect, useState } from "react";
// import { API_KEY } from "../utils/Config";

// export const MovieContext = createContext({});

// export const MovieProvider = ({ children }) => {
//   const [movieData, setMovieData] = useState({ results: [] });
//   const [movieDetails, setMovieDetails] = useState();
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const getMovieData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
//         );
//         const jsonData = await response.json();
//         setMovieData(jsonData);
//       } catch (error) {
//         console.error("Failed to fetch: movie-data:", error);
//       }
//     };

//     getMovieData();
//   }, [currentPage]);

//   const nextPage = () => {
//     setCurrentPage(prevPage => prevPage + 1);
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(prevPage => prevPage - 1);
//     }
//   };

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <MovieContext.Provider
//       value={{
//         movieData,
//         movieDetails,
//         setMovieDetails,
//         nextPage,
//         prevPage,
//         goToPage,
//         currentPage
//       }}
//     >
//       {children}
//     </MovieContext.Provider>
//   );
// };






// import React, { createContext, useEffect, useState } from "react";
// import { API_KEY } from "../utils/Config";

// export const MovieContext = createContext({});

// export const MovieProvider = ({ children }) => {
//   const [movieData, setMovieData] = useState({ results: [] });
//   const [movieDetails, setMovieDetails] = useState();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [movieListType, setMovieListType] = useState("popular");

//   useEffect(() => {
//     const getMovieData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${movieListType}?api_key=${API_KEY}&language=en-US&page=${currentPage}`
//         );
//         const jsonData = await response.json();
//         setMovieData(jsonData);
//       } catch (error) {
//         console.error("Failed to fetch movie data:", error);
//       }
//     };

//     getMovieData();
//   }, [currentPage, movieListType]);

//   const nextPage = () => {
//     setCurrentPage(prevPage => prevPage + 1);
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(prevPage => prevPage - 1);
//     }
//   };

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const changeMovieListType = (type) => {
//     setMovieListType(type);
//     setCurrentPage(1); // Reset to the first page when changing movie list type
//   };

//   return (
//     <MovieContext.Provider
//       value={{
//         movieData,
//         movieDetails,
//         setMovieDetails,
//         nextPage,
//         prevPage,
//         goToPage,
//         currentPage,
//         changeMovieListType
//       }}
//     >
//       {children}
//     </MovieContext.Provider>
//   );
// };



import React, { createContext, useEffect, useState } from "react";
import { API_KEY } from "../utils/Config";

export const MovieContext = createContext({});

export const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState({ results: [] });
  const [movieDetails, setMovieDetails] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [movieListType, setMovieListType] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getMovieData = async () => {
      let apiUrl = `https://api.themoviedb.org/3/movie/${movieListType}?api_key=${API_KEY}&language=en-US&page=${currentPage}`;
      
      if (movieListType === 'search') {
        apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${currentPage}`;
      }

      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setMovieData(jsonData);
      } catch (error) {
        console.error("Failed to fetch movie data:", error);
      }
    };

    getMovieData();
  }, [currentPage, movieListType, searchQuery]);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const changeMovieListType = (type, query = "") => {
    setMovieListType(type);
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page when changing movie list type or performing search
  };

  return (
    <MovieContext.Provider
      value={{
        movieData,
        movieDetails,
        setMovieDetails,
        nextPage,
        prevPage,
        goToPage,
        currentPage,
        changeMovieListType
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
