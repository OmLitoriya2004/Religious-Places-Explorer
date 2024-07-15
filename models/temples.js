const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const listSchema = new Schema({
    title: {
        type: String,
        required: true,
        immutable: true
    },
    description: String,
    hotels_nearby: {
        hotel_name: String,
        price_per_night: Number
    },
    image: {
        url: {
            type: String,
            default: "https://tse1.mm.bing.net/th?id=OIP.QyRJqvOg5M61sjdh_25y2QHaEo&pid=Api&P=0&h=180",
            set: (v) => v === "" ? "https://tse1.mm.bing.net/th?id=OIP.QyRJqvOg5M61sjdh_25y2QHaEo&pid=Api&P=0&h=180" : v
        }
    },
    entry_fee: Number,
    nearest_railway_station: String,
    location: String,
    country: String
});

const Temples=mongoose.model("Temples",listSchema);

module.exports=Temples;

