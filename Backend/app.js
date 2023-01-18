const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const movieRoutes = require("./router/movies");
const reviewRoutes = require("./router/reviews");
const authRoutes = require("./router/auth");

const app = express();

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
  .connect(
    "mongodb+srv://rahulpadhi1999:tT7MmdH7BY4DH2Jh@moviereviewcluster.pmwgh1v.mongodb.net/reviewdata?retryWrites=true"
  )
  .then(() =>
    app.listen(8000, () => {
      console.log("port activated");
    })
  )
  .catch(() => {
    console.log("database error");
  });

//tT7MmdH7BY4DH2Jh//
