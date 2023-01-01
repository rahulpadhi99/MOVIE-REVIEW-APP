const express = require("express");
const reviewsController = require("../controllers/reviews");

const router = express.Router();

router.get("/reviews", reviewsController.getAllReviews);
router.post("/reviews", reviewsController.postReviews);
router.put("/reviews/:reviewId", reviewsController.updateReviews)
router.delete("/reviews/:reviewId", reviewsController.deleteReviews);

module.exports = router;
