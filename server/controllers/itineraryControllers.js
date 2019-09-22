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

exports.createItineraryItem = (req, res) => {
  const { place, trip } = req.params;
  const addItem = { ...req.body, place, trip };
  db.Itinerary.create(addItem)
    .then(newItin => {
      res.status(201).json(newItin);
    })
    .catch(err => {
      res.send(err);
    });
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

// exports.updateTodo = (req, res) => {
//   db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
//     .then(newTodo => {
//       res.json(newTodo);
//     })
//     .catch(err => {
//       res.send(err);
//     });
// };

// exports.deleteTodo = (req, res) => {
//   db.Todo.remove({ _id: req.params.todoId })
//     .then(() => {
//       res.json({ message: "This has been deleted" });
//     })
//     .catch(err => {
//       res.send(err);
//     });
// };

module.exports = exports;
