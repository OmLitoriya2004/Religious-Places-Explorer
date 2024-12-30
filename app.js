const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const mongoose = require("mongoose");
const methods = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utilities/ExpressError.js");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const session = require("express-session");

const User = require("./models/users.js");
const placesRouter = require("./routes/places.js");
const reviewsRouter = require("./routes/review.js");
const UserRouter = require("./routes/user.js");

app.use(methods("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ReligiousPlaces");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()
  .then((res) => {
    console.log("Success");
  })
  .catch((err) => console.log(err));

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.get("/", (req, res) => {
  res.render("./pages/home.ejs");
});

app.use("/places", placesRouter);
app.use("/places/:id/reviews", reviewsRouter);
app.use("", UserRouter);




app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something Went Wrong!" } = err;
  res.status(statusCode).render("./pages/error.ejs", { message });
});

app.listen(port, (req, res) => {
  console.log("okay");
});
