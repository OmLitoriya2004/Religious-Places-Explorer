const mongoose = require('mongoose');
const data=require("./data.js");
const Temples = require('../models/Temples');
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ReligiousPlaces');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  main()
      .then((res)=>{
          console.log("Success");
      })
      .catch(err => console.log(err));


const initDb=async()=>{
    await Temples.deleteMany({});
    await Temples.insertMany(data.data);
}

initDb();