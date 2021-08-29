const express = require("express");
const router = express.Router();
const Asignature = require("../controllers/asignature");

router.post("/registerAsignature", Asignature.registerAsignature);

module.exports = router;
