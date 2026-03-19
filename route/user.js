const express = require("express");

const route = express.Router();

const {createUser, userLogin} = require("../controllers/user");
route.post("/",createUser);
route.post("/login",userLogin);

module.exports = route;
