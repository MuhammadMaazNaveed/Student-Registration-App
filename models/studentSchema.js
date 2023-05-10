const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { ObjectId } = mongoose.Schema.Types;
const studentSchema = mongoose.Schema({
  sMobileNo: {
    type: Number,
    required: true,
  },
  fName: {
    type: String,
    required: true,
  },
  fAccuptation: {
    type: String,
    required: true,
  },
  mName: {
    type: String,
    required: true,
  },
  mAccuptation: {
    type: String,
    required: true,
  },
  inComeOfParents: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  address: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  Exam: {
    type: Number,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  collageName: {
    type: String,
    required: true,
  },
  centerOfExam: {
    type: String,
    required: true,
  },
  examPassed: {
    type: Number,
    required: true,
  },
  nameofBoard: {
    type: String,
    required: true,
  },
  yearOfPassing: {
    type: Number,
    required: true,
  },
  postedBy: {
    type: ObjectId,
    ref: "user",
  },
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
