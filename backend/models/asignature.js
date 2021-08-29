const mongoose = require("mongoose");

const asignatureSchema = new mongoose.Schema({
  name: String,
  data: { type: Date, default: Date.now },  
  teacherId: { type: mongoose.Schema.ObjectId, ref: "teacher" },
});

const asignature = mongoose.model("asignature", asignatureSchema);
module.exports = asignature;
