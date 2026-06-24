import { useEffect, useState } from "react";
import API from "../../services/api";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await API.get("/movies/trending");

        const movies =
          response.data.results || response.data;

        const randomIndex = Math.floor(
          Math.random() * movies.length
        );

        setMovie(movies[randomIndex]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBanner();
  }, []);

  if (!movie) return null;

  return (
    <div
      style={{
        height: "80vh",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "50px",
          maxWidth: "600px",
          background: "rgba(0,0,0,0.4)",
        }}
      >
        <h1>{movie.title}</h1>

        <p>{movie.overview}</p>

        <button>▶ Play</button>

        <button
          style={{
            marginLeft: "10px",
          }}
        >
          ℹ More Info
        </button>
      </div>
    </div>
  );
}

export default Banner;