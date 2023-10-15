const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const movieRoutes = require("./router/movies");
const reviewRoutes = require("./router/reviews");
const authRoutes = require("./router/auth");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const DATABASE_URL = process.env.MONGODB_CONNECT_URL;
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(movieRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

app.use((error, req, res, next) => {
  const errorStatus = error.statusCode;
  const errorMessage = error.message;

  res.status(errorStatus).json({ message: errorMessage });
});
mongoose
  .connect(DATABASE_URL)
  .then(() => app.listen(PORT))
  .catch((err) => {
    console.log("database error", err);
  });
