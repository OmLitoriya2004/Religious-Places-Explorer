const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utilities/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const { renderSignupForm, signupUser, renderLoginForm, loginUser, logoutUser }=require("../controllers/users.js");

router
  .route("/signup")
  .get( renderSignupForm)
  .post( wrapAsync(signupUser));

router
  .route("/login")
  .get( renderLoginForm)
  .post(
    saveRedirectUrl,
passport.authenticate("local", {
  failureRedirect: "/login",
  failureFlash: true,
}),
    loginUser
  );

router.get("/logout",logoutUser)

module.exports = router;
