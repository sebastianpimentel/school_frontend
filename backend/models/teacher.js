const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const teacherSchema = new mongoose.Schema({
  name: String,
  identify: String,
  specialty: String,
  email: String,
  password: String,
  date: { type: Date, default: Date.now },
});
teacherSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      specialty: this.specialty,
      iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};

const teacher = mongoose.model("teacher", teacherSchema);
module.exports = teacher;
