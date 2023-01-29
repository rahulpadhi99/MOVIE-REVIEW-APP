const express = require("express");
const isAuth = require("../middleware/is-auth");
const reviewsController = require("../controllers/reviews");

const router = express.Router();

router.get("/reviews", isAuth, reviewsController.getAllReviews);
router.post("/reviews", isAuth, reviewsController.postReviews);
router.put("/reviews/:reviewId", isAuth, reviewsController.updateReviews);
router.delete("/reviews/:reviewId", isAuth, reviewsController.deleteReviews);

module.exports = router;
