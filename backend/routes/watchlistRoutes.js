const express = require("express");

const {
  addToWatchlist,
  getWatchlist,
  deleteFromWatchlist,
} = require("../controllers/watchlistController");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addToWatchlist);

router.get("/", protect, getWatchlist);

router.delete(
  "/:id",
  protect,
  deleteFromWatchlist
);

module.exports = router;