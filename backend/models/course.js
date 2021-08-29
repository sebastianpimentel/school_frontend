const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: String,
  hours: Number,
  price: Number,
  asignatureId:{ type: mongoose.Schema.ObjectId, ref: "asignature" }
});
const course = mongoose.model("course", courseSchema);
module.exports = course;
