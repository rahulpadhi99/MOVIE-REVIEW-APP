const axios = require("axios");
const Movie = require("../models/movie");

exports.getAllMovies = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.status(200).json({ movies: movies });
    })
    .catch((error) => {
      error.statusCode = 500;
      next(error);
    });
};
exports.postMovies = (req, res, next) => {
  const title = req.body.title;
  const year = req.body.year;

  axios
    .get(`https://www.omdbapi.com/?apikey=4823343f&t=${title}&y=${year}`)
    .then((res) => {
      const { data } = res;
      const title = data.Title;
      const released = data.Released;
      const plot = data.Plot;
      const actors = data.Actors;
      const director = data.Director;
      const runTime = data.Runtime;
      const genre = data.Genre;
      const poster = data.Poster;
      const imdbRating = data.imdbRating;
      const imdbID = data.imdbID;
      const boxOffice = data.BoxOffice;
      const movie = new Movie({
        title: title,
        released: released,
        plot: plot,
        actors: actors,
        director: director,
        runTime: runTime,
        genre: genre,
        poster: poster,
        imdbRating: imdbRating,
        imdbID: imdbID,
        boxOffice: boxOffice,
      });
      return movie.save();
    })
    .then(() => {
      res.status(200).json({ message: "Movie saved successfully" });
    })
    .catch((error) => {
      error.statusCode = 500;
      next(error);
    });
};
