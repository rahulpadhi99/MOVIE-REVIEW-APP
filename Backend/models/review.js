const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const reviewSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    movie: {
      type: Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =  mongoose.model("Review", reviewSchema);
