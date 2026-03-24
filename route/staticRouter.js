const user1 = require("../models/url");
const express = require("express");
const router = express.Router();

router.get('/',async (req,res)=>{
if(!req.user) return res.redirect("/login");

    const id = await user1.find({createdBy: req.user._id})
    res.render("home",{
        data : id,
    });
}) 

router.get("/signup",(req,res)=>{
    res.render("signup");
})  

router.get("/login",(req,res)=>{
    res.render("login");
})  


module.exports = router;