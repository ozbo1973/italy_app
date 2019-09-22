var mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = Promise;

module.exports.Itinerary = require("./itinerarySchema");
