const express = require("express");
const Userrouter = express.Router();
const user = require("../controllers/users");

Userrouter.get("/allUsers", user.getUsers);

module.exports = Userrouter;
