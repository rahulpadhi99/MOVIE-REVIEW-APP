const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.login = (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const error = new Error("User does not exists, please signUp");
        error.statusCode = 404;
        throw error;
      }
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Password does not match");
        error.statusCode = 401;
        throw error;
      }
      res.status(200).json({ message: "User login successfully" });
    })
    .catch((err) => {
      next(err);
    });
};

exports.signUp = (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        const error = new Error("User already exists, please login");
        error.statusCode = 402;
        throw error;
      }
      return bcrypt.hash(password, 12);
    })
    .then((hashPassword) => {
      const newUser = new User({
        email: email,
        password: hashPassword,
        name: name,
      });
      return newUser.save();
    })
    .then(() => {
      res.status(200).json({ message: "User creaated successfully" });
    })
    .catch((err) => {
      next(err);
    });
};
