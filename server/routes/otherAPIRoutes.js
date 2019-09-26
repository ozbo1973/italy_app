const express = require("express");
const ctl = require("../controllers/otherAPIControllers");

//route = /api/other
var router = express.Router();
router.route("/weather/:trip/:place").get(ctl.pageWeatherData);

module.exports = router;
