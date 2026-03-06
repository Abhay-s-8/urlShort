const express = require("express");

const route = express.Router();
const {createUser} = require("../controllers/user");

route.post('/',createUser);

module.exports = route;
