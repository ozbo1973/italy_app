const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  title: String,
  description: String,
  tickets: { type: Number, match: /[0 - 1]/, default: 2 },
  place: String,
  trip: String
});

module.exports = mongoose.model("Itinerary", itinerarySchema);
