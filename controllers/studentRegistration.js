const student = require("../models/studentSchema");

const CreateStudent = async (req, res) => {
  const {
    sMobileNo,
    fName,
    fAccuptation,
    mName,
    mAccuptation,
    inComeOfParents,
    gender,
    religion,
    Exam,
    rollNumber,
    collageName,
    centerOfExam,
    examPassed,
    nameofBoard,
    yearOfPassing,
    address,
    nationality,
  } = req.body;
  const newStudent = new student({
    sMobileNo,
    fName,
    fAccuptation,
    mName,
    mAccuptation,
    inComeOfParents,
    gender,
    religion,
    Exam,
    rollNumber,
    collageName,
    centerOfExam,
    examPassed,
    nameofBoard,
    yearOfPassing,
    address,
    nationality,
    postedBy: req.user,
  });
  try {
    await newStudent.save();
    if (newStudent) return res.status(201).json({ success: true, newStudent });
  } catch (error) {
    console.log(error);
  }
};
const getStudents = async (req, res) => {
  try {
    const Students = await (await student.find({})).splice(0, 1);
    res.status(200).json(Students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getStudent = async (req, res) => {
  try {
    const Student = await student.findById(req.params.id);
    res.status(200).json(Student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const editStudent = async (req, res) => {
  let Student = req.body;
  const neweditStudent = new student(Student);
  try {
    await student.updateOne({ _id: req.params.id }, neweditStudent);
    res.status(201).json(neweditStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const deleteStudent = async (req, res) => {
  try {
    await student.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  CreateStudent,
  getStudents,
  getStudent,
  editStudent,
  deleteStudent,
};
