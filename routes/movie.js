const express = require("express");
const movieRouter = express.Router();

const { Movie } = require("../models/movie");

movieRouter.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find({ category: req.query.category });
    res.json(movies);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

movieRouter.post("/add-movie", async (req, res) => {
    try {
      const { title, description, images, movieUrl, rating } = req.body;
      let movie = new Movie({
        title,
        description,
        images,
        movieUrl, rating
      });
      movie = await movie.save();
      res.json(movie);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

// create a get request to search products and get them
// /api/products/search/i
movieRouter.get("/api/movies/search/:title", async (req, res) => {
  try {
    const movies = await Movie.find({
      title: { $regex: req.params.title, $options: "i" },
    });

    res.json(movies); 
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});



module.exports = movieRouter;
