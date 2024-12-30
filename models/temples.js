const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review=require("./review.js")

const listSchema = new Schema({
  title: {
    type: String,
    required: true,
    immutable: true,
  },
  description: String,
  image: {
    url: {
      type: String,
      default:
        "https://tse1.mm.bing.net/th?id=OIP.QyRJqvOg5M61sjdh_25y2QHaEo&pid=Api&P=0&h=180",
      set: (v) =>
        v === ""
          ? "https://tse1.mm.bing.net/th?id=OIP.QyRJqvOg5M61sjdh_25y2QHaEo&pid=Api&P=0&h=180"
          : v,
    },
  },
  entry_fee: Number,
  nearest_railway_station: String,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Temples = mongoose.model("Temples", listSchema);

module.exports = Temples;
