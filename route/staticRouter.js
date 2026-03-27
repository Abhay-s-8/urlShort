const user1 = require("../models/url");
const express = require("express");
const router = express.Router();
const { ristrictTo } = require("../middleware/auth");

router.get("/", ristrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
  if (!req.user) return res.redirect("/login");

  if (req.user.role == "ADMIN") {
    const id = await user1.find({});
    res.render("home", {
      data: id,
    });
  }
  if (req.user.role == "NORMAL") {
    const id = await user1.find({ createdBy: req.user._id });
    res.render("home", {
      data: id,
    });
  }
});

// router.get('/admin', ristrictTo(['ADMIN']) ,async (req,res)=>{
// if(!req.user) return res.redirect("/login");

//
// })

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
