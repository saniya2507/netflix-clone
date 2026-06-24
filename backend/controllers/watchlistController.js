const Watchlist = require("../models/Watchlist");

const addToWatchlist = async (req, res) => {
  try {
    const { movieId, title, poster } = req.body;

    const item = await Watchlist.create({
      user: req.user._id,
      movieId,
      title,
      poster,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getWatchlist = async (req, res) => {
  try {
    const items = await Watchlist.find({
      user: req.user._id,
    });

    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteFromWatchlist = async (req, res) => {
  try {
    const item = await Watchlist.findById(
      req.params.id
    );

    if (!item) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    await item.deleteOne();

    res.json({
      message: "Movie removed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addToWatchlist,
  getWatchlist,
  deleteFromWatchlist,
};