const express = require("express");
const Adminrouter = express.Router();
const Routes = require("../controllers/user.js");
Adminrouter.post("/admin", Routes.login);

module.exports = Adminrouter;
