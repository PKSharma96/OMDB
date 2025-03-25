import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import ".././index.css";

const API_KEY = "51b2049c";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState("");

  const searchMovies = async () => {
    if (!query) return;
    setError("");
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search || []);
      } else {
        setMovies([]);
        setError("No movies found. Try searching something else.");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Something went wrong. Please try again.");
    }
  };


  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies();
    }
  };


  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">🎬 Movie Finder</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4 text-center">
        <h1 className="mb-4">Search for a Movie</h1>
        <div className="search-bar">
          <input
            type="text"
            className="form-control w-50 d-inline"
            placeholder="Type a movie name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="btn btn-primary ms-2" onClick={searchMovies}>Search</button>
        </div>

        {error && <p className="text-danger mt-3">{error}</p>}

        {selectedMovie ? (
          <MovieDetail
            movieId={selectedMovie}
            onBack={() => setSelectedMovie(null)}
          />
        ) : (
          <MovieList movies={movies} onMovieSelect={setSelectedMovie} />
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="mb-0">© {new Date().getFullYear()} Movie Finder | Built with ❤️ using React & Bootstrap by PK</p>
      </footer>

    </>
  );
};

export default Home;
