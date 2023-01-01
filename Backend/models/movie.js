const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    released: {
      type: String,
      required: true,
    },
    plot:{
      type: String,
      required: false
    },
    actors: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    runTime: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    imdbRating: {
      type: String,
      required: true,
    },
    imdbID: {
      type: String,
      required: true,
    },
    boxOffice: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);

// {
//     "Title": "J. Daughter presents Scary Stories",
//     "Year": "2022",
//     "Rated": "N/A",
//     "Released": "13 Sep 2022",
//     "Runtime": "89 min",
//     "Genre": "Horror",
//     "Director": "Mark Mos",
//     "Writer": "Mark Mos",
//     "Actors": "Kristen Lundberg",
//     "Plot": "Amanda is moving into a new home far away from her previous city life. She is updating her family on the move and how she feels about it when she starts seeing things on her phone - and this is just the first story.",
//     "Language": "English",
//     "Country": "United States",
//     "Awards": "N/A",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYzI1NDMyYTItODQzMS00YTc0LTliZGYtYmJiNmJkYzBjOTkwXkEyXkFqcGdeQXVyMjM4ODY4Mjk@._V1_SX300.jpg",
//     "Ratings": [],
//     "Metascore": "N/A",
//     "imdbRating": "N/A",
//     "imdbVotes": "31",
//     "imdbID": "tt22061140",
//     "Type": "movie",
//     "DVD": "N/A",
//     "BoxOffice": "N/A",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
//     }
