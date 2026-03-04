const user1 = require("../models/url");
const express = require('express');
const router = express.Router();

router.get('/',async (req,res)=>{

    const id = await user1.find({})
    res.render("home",{
        data : id,
    });
})

module.exports = router;

