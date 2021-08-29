const Student = require("../models/student");
const bcrypt = require("bcrypt");
const Course = require("../models/course");

const registerStudent = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.identify ||
    !req.body.email ||
    !req.body.password
  )
    return res.status(400).send("Incomplete data, check again");

  let existingStudent = await Student.findOne({ email: req.body.email });
  if (existingStudent)
    return res.status(400).send("The Student already exists");

    let course = await Course.findOne({ name: "java" });
    if (!course) return res.status(400).send("No course was asssigned");

  let hash = await bcrypt.hash(req.body.password, 10);

  let student = new Student({
    name: req.body.name,
    identify: req.body.identify,
    email: req.body.email,
    password: hash,
    courseId:course._id
  });

  let result = await student.save();
  if (!result) return res.status(400).send("Failed to register student");
  try {
    let jwtToken = student.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }
};

module.exports = { registerStudent };
