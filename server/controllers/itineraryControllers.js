const Itinerary = require("../models/itinerarySchema");

exports.getAllItinerary = async (req, res) => {
  const { place, trip } = req.params;
  try {
    const itins = await Itinerary.find({ trip: trip, place: place });
    res.json(itins);
  } catch (error) {
    res.send(err);
  }
};

exports.createItineraryItem = async (req, res) => {
  const { place, trip } = req.params;
  const addItem = { ...req.body, place, trip };
  try {
    const newItin = await Itinerary.create(addItem);
    res.status(201).json(newItin);
  } catch (error) {
    res.send(error);
  }
};

// exports.showTodo = (req, res) => {
//   db.Todo.findById({ _id: req.params.todoId })
//     .then(todo => {
//       res.json(todo);
//     })
//     .catch(err => {
//       res.send(err);
//     });
// };

exports.updateItinerary = async (req, res) => {
  const { id } = req.params;
  try {
    const updtItin = await Itinerary.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    });
    res.json(updtItin);
  } catch (error) {
    res.send(error);
  }
};

exports.deleteItinerary = async (req, res) => {
  const { id } = req.params;
  try {
    const itin = await Itinerary.findOneAndDelete({ _id: id });
    res.json(itin);
  } catch (error) {
    res.send(error);
  }
};

module.exports = exports;
