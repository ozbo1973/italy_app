const express = require("express");
const ctl = require("../controllers/otherAPIControllers");

//route = /api/other
var router = express.Router();
router.route("/weather/:trip/:place").get(ctl.pageWeatherData);
router.route("/yelp/:trip/:place").get(ctl.pageYelpData);

module.exports = router;
