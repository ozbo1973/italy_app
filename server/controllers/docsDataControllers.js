const LinksDocs = require("../models/linksDocSchema");

exports.getAlllinksDocs = async (req, res) => {
  const { category, trip } = req.params;
  try {
    const linksDocs = await LinksDocs.find({ trip: trip, category: category });
    res.json(linksDocs);
  } catch (error) {
    res.send(error);
  }
};

exports.createLinksDocs = async (req, res) => {
  const { category, trip } = req.params;
  const addItem = { ...req.body, category, trip };
  try {
    const newLinkDoc = await LinksDocs.create(addItem);
    res.status(201).json(newLinkDoc);
  } catch (error) {
    res.send(error);
  }
};

exports.updateLinksDocs = async (req, res) => {
  const { id } = req.params;
  try {
    const updtLinksDocs = await LinksDocs.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true
      }
    );
    res.json(updtLinksDocs);
  } catch (error) {
    res.send(error);
  }
};

exports.deleteLinksDocs = async (req, res) => {
  const { id } = req.params;
  try {
    const linksDocs = await LinksDocs.findOneAndDelete({ _id: id });
    res.json(linksDocs);
  } catch (error) {
    res.send(error);
  }
};

module.exports = exports;
