const {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  searchMovies,
} = require("../services/tmdbService");

const trendingMovies = async (req, res) => {
  try {
    const movies = await getTrendingMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const popularMovies = async (req, res) => {
  try {
    const movies = await getPopularMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const topRatedMovies = async (req, res) => {
  try {
    const movies = await getTopRatedMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const searchMovie = async (req, res) => {
  try {
    const movies = await searchMovies(
      req.query.query
    );

    res.json(movies);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  trendingMovies,
  popularMovies,
  topRatedMovies,
  searchMovie,
};