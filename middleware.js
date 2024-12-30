const listing = require("./models/Temples.js");
const Review = require("./models/review.js");
const ExpressError = require("./utilities/ExpressError.js");
const { reviewSchema, templeSchema} = require("./schema.js");


module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}


//Authorization middlewares
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to do this task");
    return res.redirect("/login");
  }
  next();
};

module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let listing_= await listing.findById(id);
    let currUser=res.locals.currUser;
    if(!(currUser&& currUser._id.equals(listing_.owner._id))){
        req.flash("error","You are not the owner of the post");
        return res.redirect(`/places/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async (req, res, next) => {
  let { id,reviewId } = req.params;
  let review = await Review.findById(reviewId);
  let currUser = res.locals.currUser;
  if (!(currUser && currUser._id.equals(review.author._id))) {
    req.flash("error", "You are not the author of the review");
    return res.redirect(`/places/${id}`);
  }
  next();
};

//Schema Error handlers
module.exports.validateListing = (req, res, next) => {
  let { error } = templeSchema.validate(req.body);
  if (error) {
    let errmsg = error.details.map((el) => error.message).join(",");
    throw new ExpressError(400, errmsg);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errmsg = error.details.map((el) => error.message).join(",");
    throw new ExpressError(400, errmsg);
  } else {
    next();
  }
};
