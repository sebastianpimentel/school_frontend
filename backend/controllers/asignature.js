const Asignature = require("../models/asignature");
const Teacher = require("../models/teacher");

const registerAsignature = async (req, res) => {
  if (!req.body.name)
    return res.status(400).send("Incomplete data, check again");

  let teacher = await Teacher.findOne({ name: "Andres Sanchez" });
  if (!teacher) return res.status(400).send("No teahcer was asssigned");

  let asignature = new Asignature({
    name: req.body.name,
    teacherId: teacher._id,
  });

  let result = await asignature.save();
  if (!result) return res.status(400).send("Failed to register asignature");
  return res.status(200).send({ result });

};

module.exports = { registerAsignature };
