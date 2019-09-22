const express = require("express");
const ctl = require("../controllers/itineraryControllers");

//route = /api/itin
var router = express.Router();
router
  .route("/:trip/:place")
  .get(ctl.getAllItinerary)
  .post(ctl.createItineraryItem);

router
  .route("/:trip/:place/:id")
  .patch(ctl.updateItinerary)
  .delete(ctl.deleteItinerary);

module.exports = router;
