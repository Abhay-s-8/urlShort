const express = require('express');
const connectToDatabase = require('./connection');
const cookieparse = require("cookie-parser");
const path = require("path");
const {restrictToLoggedInUserOnly} = require("./middleware/auth");
const port = 3001;

const app = express();
//routes
const routeUser = require("./route/route")
const staticRouter = require("./route/staticRouter");
const user = require("./route/user")

//connection
connectToDatabase("mongodb://localhost:27017/urlShortener");
//data reader
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieparse());
//setting ejs
app.set("view engine","ejs");
app.set("views", path.resolve("./views"));

//route allotment

app.use("/",staticRouter);
app.use("/url",routeUser);
app.use("/user",user); 

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
