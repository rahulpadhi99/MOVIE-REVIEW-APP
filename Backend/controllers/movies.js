const axios = require("axios");
const Movie = require("../models/movie");

exports.getMovies = (req, res, next) => {
  const title = new RegExp(req?.query?.title, "i");
  const year = new RegExp(req?.query?.year);
  Movie.find({
    title: title,
    released: year,
  })
    .then((movies) => {
      res.status(200).json(movies);
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
      const released = data.Released.split(" ")[2];
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
