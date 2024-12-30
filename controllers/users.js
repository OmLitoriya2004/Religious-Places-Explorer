
const User = require("../models/users.js");
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signupUser=async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({
        email,
        username,
      });
      const registerUser = await User.register(newUser, password);
      console.log(registerUser);
      req.login(registerUser,(err)=>{
        if(err) return next(err);
        req.flash("success", "Welcome to Religiousplaces");
        res.redirect("/places");
      })
      
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.loginUser = async (req, res) => {
  req.flash("success", "Welcome back to Religiousplaces");
  let redirectUrl = res.locals.redirectUrl || "/places";
  res.redirect(redirectUrl);
};

module.exports.logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "Logged out successfully!");
    res.redirect("/places");
  });
};