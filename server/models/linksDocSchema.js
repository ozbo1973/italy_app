const mongoose = require("mongoose");

const linksDocSchema = new mongoose.Schema({
  category: { type: Number, match: /[1-7]/ },
  description: String,
  url: String,
  place: String,
  trip: String
});

module.exports = mongoose.model("LinksAndDocs", linksDocSchema);
