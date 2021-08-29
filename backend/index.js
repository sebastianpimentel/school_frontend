const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Course = require("./routes/course");
const Asignature = require("./routes/asignature");
const Teacher = require("./routes/teacher");
const Student = require("./routes/student");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/course", Course);
app.use("/api/asignature", Asignature);
app.use("/api/teacher", Teacher);
app.use("/api/student", Student);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port : " + process.env.PORT)
);

dbConnection();
