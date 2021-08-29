const Teacher = require("../models/teacher");
const bcrypt = require("bcrypt");

const registerTeacher = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.identify ||
    !req.body.specialty ||
    !req.body.email ||
    !req.body.password
  )
    return res.status(400).send("Incomplete data, check again");

  let existingTeacher = await Teacher.findOne({ email: req.body.email });
  if (existingTeacher)
    return res.status(400).send("The teacher already exists");

  let hash = await bcrypt.hash(req.body.password, 10);

  let teacher = new Teacher({
    name: req.body.name,
    identify: req.body.identify,
    specialty: req.body.specialty,
    email: req.body.email,
    password: hash,
  });

  let result = await teacher.save();
  if (!result) return res.status(400).send("Error registering teacher");
  try {
    let jwtToken = teacher.generateJWT();
    return res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }
};

module.exports = { registerTeacher };
