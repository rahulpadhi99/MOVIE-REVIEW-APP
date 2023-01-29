const express = require("express");
const isAuth = require("../middleware/is-auth");
const moviesController = require("../controllers/movies");

const router = express.Router();

router.get("/movies", isAuth, moviesController.getMovies);
router.post("/movies", isAuth, moviesController.postMovies);

module.exports = router;
