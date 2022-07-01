const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    movieUrl: {
      type: String,
      required: true,
    },
     category: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true
    },
    release_date: {
      type: String,
      required: true
    }
  });
  
  const Movie = mongoose.model("Movie", movieSchema);
  module.exports = { Movie, movieSchema };