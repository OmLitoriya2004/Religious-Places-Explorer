const mongoose = require('mongoose');
const InitData=require("./data.js");
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
    InitData.data = InitData.data.map((obj) => ({
      ...obj,
      owner: "67718e7be27520b4e875a447",
    }));
    await Temples.insertMany(InitData.data);
    console.log("data initialized");
}

initDb();