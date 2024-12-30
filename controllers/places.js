const listing = require("../models/Temples.js");

module.exports.index = async (req, res) => {
  const lists = await listing.find({});
  res.render("./pages/index.ejs", { lists });
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing_ = await listing
    .findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing_) {
    req.flash("error", "Requested place is unknown");
    res.redirect("/places");
  }
  res.render("./pages/show.ejs", { listing_ });
};

module.exports.createListing=async (req, res) => {
    const newListing = new listing(req.body.listing);
    console.log(newListing,"/n",req.body.listing);
    newListing.image.url=req.body.listing.image;
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Place Added");
    res.redirect("/places");
};

module.exports.destroyListing=async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndDelete(id);
    req.flash("success", "Place Removed");
    res.redirect("/places");
};

module.exports.renderEditForm=async (req, res) => {
    let { id } = req.params;
    const listing_ = await listing.findById(id);
    if (!listing_) {
      req.flash("error", "Requested place is unknown");
      res.redirect("/places");
    }
    res.render("./pages/edit.ejs", { listing_ });
  }

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const { image, ...otherFields } = req.body.listing;
  const updatedListing = await listing.findById(id);
  if (updatedListing) {
    Object.assign(updatedListing, otherFields);
    if (image) {
      updatedListing.image.url = image;
    }
    await updatedListing.save();
  }
  res.redirect(`/places/${id}`);
};

module.exports.renderNewForm = (req, res) => {
  res.render("./pages/new.ejs");
};