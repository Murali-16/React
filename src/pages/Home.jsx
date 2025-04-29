import React, { useEffect, useState } from "react";
import "./Home.css";

function App() {
  const [movieData, setMovieData] = useState([]);

  const getData = async () => {
    const url = "https://imdb236.p.rapidapi.com/imdb/lowest-rated-movies";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "071fe4ec19msh54b3a31a361c690p1f6c30jsn2f12ada2397a",
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setMovieData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app-container">
      <h1>🎬 Trending Box Office Movies</h1>
      <div className="movie-grid">
        {movieData &&
          movieData.map((movie, index) => (
            <div key={index} className="movie-card">
              {movie.primaryImage && (
                <img
                  src={movie.primaryImage}
                  alt={movie.primaryTitle}
                  className="poster"
                />
              )}
              <div className="movie-info">
                <h3>{movie.primaryTitle}</h3>
                <p>🎞️ {movie.titleType}</p>
                <p>📅 {movie.releaseDate || movie.startYear}</p>
                <p>💰 Budget: {movie.budget || "N/A"}</p>
                <button className="trailer-btn">▶ Watch Trailer</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;