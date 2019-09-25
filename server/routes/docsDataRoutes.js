const express = require("express");
const ctl = require("../controllers/docsDataControllers");

//route = /api/docsData
var router = express.Router();
router
  .route("/:trip/:category")
  .get(ctl.getAlllinksDocs)
  .post(ctl.createLinksDocs);

router
  .route("/:trip/:category/:id")
  .patch(ctl.updateLinksDocs)
  .delete(ctl.deleteLinksDocs);

module.exports = router;
