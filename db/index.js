const mongoose = require("mongoose");
const Connection = (URI) => {
  try {
    mongoose.set("strictQuery", false)
    mongoose
      .connect(URI)
      .then(() => {
        console.log("Connection succesful");
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (error) {
    console.log(error)
  }
}


module.exports = Connection;
