const express=require("express");
const app=express();
const path=require("path");
const port=8080;
const mongoose = require('mongoose');
const listing = require('./models/temples');
const methods=require("method-override");
const ejsMate=require("ejs-mate");

app.use(methods("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ReligiousPlaces');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()
    .then((res)=>{
        console.log("Success");
    })
    .catch(err => console.log(err));

app.get('/',(req,res)=>{
    res.render("./listings/home.ejs");
})
app.get("/places",async (req,res)=>{
    const lists=await listing.find({});
    res.render("./listings/index.ejs",{lists});
})
app.get("/places/new",(req,res)=>{
    res.render("./listings/new.ejs");
})
app.get('/places/:id',async (req,res)=>{
    let {id}=req.params;
    const listing_ = await listing.findById(id);
    res.render("./listings/show.ejs",{listing_});
})
app.delete("/places/:id",async (req,res)=>{
    let {id}=req.params;
    await listing.findByIdAndDelete(id);
    res.redirect("/places");
})
app.get("/places/:id/edit",async (req,res)=>{
    let {id}=req.params;
    const listing_=await listing.findById(id);
    res.render("./listings/edit.ejs",{listing_});
})

app.post('/places',async (req,res)=>{
    const newListing=new listing(req.body.listing);
    await newListing.save();
    res.redirect("/places");
})
app.put("/places/:id", async (req, res) => {
    let { id } = req.params;
    const data = req.body.listing;
    if (!data.image || !data.image.url) {
        data.image = {
            url: "https://www.ehimachal.org/wp-content/uploads/2023/05/Shikari-Devi-Temple-mandi.webp"
        };
    }
    const { hotels_nearby } = data;
    if (hotels_nearby) {
        await listing.findByIdAndUpdate(id, {
            ...data,
            hotels_nearby: {
                hotel_name: hotels_nearby.hotel_name,
                price_per_night: hotels_nearby.price_per_night
            }
        });
    } else {
        await listing.findByIdAndUpdate(id, data);
    }
    res.redirect("/places");
});

app.listen(port,(req,res)=>{
    console.log("okay");
})
