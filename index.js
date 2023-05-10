const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/index.js");
const StudentRouter = require("./routes/studentRoutes.js");
const AdminRoutes = require("./routes/adminRoutes.js");
const Userrouter = require("./routes/user.js");
const Connection = require("./db/index.js");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 8000;
Connection(process.env.MONGO_URL)
app.use(express.json());

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/students", StudentRouter);
app.use("/api", AdminRoutes);
app.use("/api", Userrouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
