const user = require("../models/userSchema");
const getUsers = async (req, res) => {
  try {
    const Users = await user.find({});
    res.status(200).json(Users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
};
