const express = require("express");
const moviesController = require("../controllers/movies");

const router = express.Router();

router.get("/movies", moviesController.getMovies);
router.post("/movies", moviesController.postMovies);

module.exports = router;
