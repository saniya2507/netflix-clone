import { useEffect, useState } from "react";
import API from "../../services/api";

function MovieRow({ title, endpoint }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await API.get(endpoint);

        console.log("API Response:", response.data);

        const movieData =
          response.data.results || response.data || [];

        setMovies(movieData);
      } catch (error) {
        console.error("Movie Fetch Error:", error);
      }
    };

    fetchMovies();
  }, [endpoint]);

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          color: "white",
          marginBottom: "15px",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
        }}
      >
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{
              width: "180px",
              height: "270px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;