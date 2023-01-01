const mongoose = require("mongoose");
const Review = require("../models/review");

exports.getAllReviews = (req, res, next) => {
  const movieId = req.query.movieId;
  Review.find({ movie: movieId })
    .then((reviews) => {
      res.status(200).json({ reviews: reviews });
    })
    .catch((error) => {
      error.statusCode = 500;
      next(error);
    });
};
exports.postReviews = (req, res, next) => {
  const movieId = req.body.movieId;
  const reviewRatings = req.body.ratings;
  const reviewDescription = req.body.description;
  const review = new Review({
    description: reviewDescription,
    ratings: reviewRatings,
    // user: "",
    movie: mongoose.Types.ObjectId(movieId),
  });
  review
    .save()
    .then(() => {
      res.status(200).json({ message: "Reviews submitted successfully" });
    })
    .catch((error) => {
      error.statusCode = 500;
      next(error);
    });
};

exports.updateReviews = (req, res, next) => {
  const reviewId = req.params.reviewId;
  const reviewRatings = req.body.ratings;
  const reviewDescription = req.body.description;
  Review.findById(reviewId)
    .then((review) => {
      if (!review) {
        console.log("errors");
        const error = new Error("No review found");
        error.statusCode = 401;
        throw error;
      }
      review.ratings = reviewRatings;
      review.description = reviewDescription;
      return review.save();
    })
    .then(() => {
      res.status(200).json({ message: "Review updated successfully" });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.deleteReviews = (req, res, next) => {
  const reviewId = req.params.reviewId;
  Review.findByIdAndRemove(reviewId)
    .then(() => {
      res.status(200).json({ message: "Reviw deleted successfully" });
    })
    .catch((error) => {
      error.statusCode = 500;
      next(error);
    });
};
