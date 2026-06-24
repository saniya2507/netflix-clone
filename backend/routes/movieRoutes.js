const express = require("express");

const {
  trendingMovies,
  popularMovies,
  topRatedMovies,
  searchMovie,
} = require("../controllers/movieController");

const router = express.Router();

router.get("/trending", trendingMovies);

router.get("/popular", popularMovies);

router.get("/top-rated", topRatedMovies);

router.get("/search", searchMovie);

module.exports = router;