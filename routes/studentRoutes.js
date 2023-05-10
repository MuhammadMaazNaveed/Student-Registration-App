const express = require("express");
const Studentrouter = express.Router();
const student = require("../controllers/studentRegistration");

Studentrouter.post("/createStudent", student.CreateStudent);
Studentrouter.get("/allStudent", student.getStudents);
Studentrouter.get("/:id", student.getStudent);

Studentrouter.post("/:id", student.editStudent);
Studentrouter.delete("/:id", student.deleteStudent);

module.exports = Studentrouter;
