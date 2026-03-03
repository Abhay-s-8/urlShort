const express = require('express');
const connectToDatabase = require('./connection');
const routeUser = require("./route/route")
const port = 3001;
const app = express();


connectToDatabase("mongodb://localhost:27017/urlShortener");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/",routeUser);


app.listen(port,()=>{
    try{
        console.log(`working server ${port}`);
    }
    catch(err){
console.log(err);
    }
})
