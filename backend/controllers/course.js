const Course = require("../models/course");
const Asignature = require("../models/asignature");

const registerCourse = async (req, res) => {
  if (!req.body.name || !req.body.hours || !req.body.price)
    return res.status(400).send("Incomplete data, check again");

  let existingCourse = await Course.findOne({ name: req.body.name });
  if (existingCourse)
    return res.status(400).send("The course is already registered");

  let asignature = await Asignature.findOne({ name: "calculo diferencial" });
  if (!asignature) return res.status(400).send("No asignature was asssigned");

  let course = new Course({
    name: req.body.name,
    hours: req.body.hours,
    price: req.body.price,
    asignatureId: asignature._id,
  });

  let result = await course.save();
  if (!result) return res.status(400).send("Failed to register course");
  return res.status(200).send({ result });
};

module.exports = { registerCourse };
