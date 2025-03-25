import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "51b2049c";

const MovieDetail = ({ movieId, onBack }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <p className="text-center">Loading movie details...</p>;

  return (
    <div className="container m-4">
      <button className="btn btn-danger mb-3" onClick={onBack}>
        ← Back to Search
      </button>
      <div className="card shadow-lg movie-detail">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
              className="p-4 img-fluid rounded-start"
              alt={movie.Title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body p-4" style={{ height: "100%" }}>
              <h2 className="card-title">{movie.Title} ({movie.Year})</h2>
              <p className="card-text"><strong>Plot:</strong> {movie.Plot}</p>
              <p className="card-text"><strong>Actors:</strong> {movie.Actors}</p>
              <p className="card-text"><strong>Director:</strong> {movie.Director}</p>
              <p className="card-text"><strong>Genre:</strong> {movie.Genre}</p>
              <p className="card-text"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
