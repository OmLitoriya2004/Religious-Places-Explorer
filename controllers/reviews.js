const Review = require("../models/review.js");
const listing = require("../models/Temples");

module.exports.createReview = async (req, res) => {
  let listing_ = await listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listing_.reviews.push(newReview);

  await newReview.save();
  await listing_.save();
  console.log("Review Saved");
  req.flash("success", "New Review Created");
  res.redirect(`/places/${req.params.id}`);
};

module.exports.deleteReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review Deleted");
  res.redirect(`/places/${req.params.id}`);
};