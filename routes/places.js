const express = require("express");
const router = express.Router();
const wrapAsync = require("../utilities/wrapAsync.js");
const { validateListing, isLoggedIn, isOwner } = require("../middleware.js");
const {
  index,
  renderNewForm,
  renderEditForm,
  showListing,
  destroyListing,
  createListing,
  updateListing,
} = require("../controllers/places.js");

router
  .route("/")
  .get(wrapAsync(index))
  .post(isLoggedIn, validateListing, wrapAsync(createListing));

router.get("/new", isLoggedIn, renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(showListing))
  .put(validateListing, isLoggedIn, isOwner, wrapAsync(updateListing))
  .delete(isLoggedIn, isOwner, wrapAsync(destroyListing));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(renderEditForm));

module.exports = router;
