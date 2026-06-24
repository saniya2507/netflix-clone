const axios = require("axios");

const BASE_URL = "https://api.themoviedb.org/3";

const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/week`,
    {
      params: {
        api_key: process.env.TMDB_API_KEY,
      },
    }
  );

  return response.data.results;
};

const getPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular`,
    {
      params: {
        api_key: process.env.TMDB_API_KEY,
      },
    }
  );

  return response.data.results;
};

const getTopRatedMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/movie/top_rated`,
    {
      params: {
        api_key: process.env.TMDB_API_KEY,
      },
    }
  );

  return response.data.results;
};

const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query,
      },
    }
  );

  return response.data.results;
};

module.exports = {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  searchMovies,
};