const mongoose = require("mongoose");


async function connectToDatabase(url) {
    try{await mongoose.connect(url);
        console.log("Connected to database successfully");
    }
    catch(err){
        console.log("Error connecting to database",err);
    }
}

module.exports = connectToDatabase;