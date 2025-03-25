import React from "react";

const MovieList = ({ movies, onMovieSelect }) => {
  return (
    <div className="row mt-4">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="col-md-4 mb-4">
          <div
            className="card h-100 shadow-sm"
            style={{ cursor: "pointer" }}
            onClick={() => onMovieSelect(movie.imdbID)}
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
              className="card-img-top"
              alt={movie.Title}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text text-muted">
                <strong>Year:</strong> {movie.Year}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
