const express = require('express');
const connectToDatabase = require('./connection');
const routeUser = require("./route/route")
const path = require("path");
const staticRouter = require("./route/staticRouter");
const port = 3001;

const app = express();


connectToDatabase("mongodb://localhost:27017/urlShortener");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine", "ejs" );
app.set("views", path.resolve("./views"));

app.use("/",routeUser);
app.use("/",staticRouter);

// app.get("/home", async (req,res)=>{
//     const url1 = await req.body;
// return res.render('home',{
//     urls:url1,
// });
// })



app.listen(port,()=>{
    try{
        console.log(`working server ${port}`);
    }
    catch(err){
console.log(err);
    }
})
