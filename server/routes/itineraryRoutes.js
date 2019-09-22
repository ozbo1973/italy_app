const express = require("express");
const ctl = require("../controllers/itineraryControllers");

//route = /api/itin
var router = express.Router();
router
  .route("/:trip/:place")
  .get(ctl.getAllItinerary)
  .post(ctl.createItineraryItem);

// router
//   .route("/:id")
//   .get(fx.showTodo)
//   .put(fx.updateTodo)
//   .delete(fx.deleteTodo);

module.exports = router;
