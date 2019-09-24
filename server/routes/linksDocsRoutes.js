const express = require("express");
const ctl = require("../controllers/linksDocsControllers");

//route = /api/linksdocs
var router = express.Router();
router
  .route("/:trip/:place")
  .get(ctl.getAlllinksDocs)
  .post(ctl.createLinksDocs);

router
  .route("/:trip/:place/:id")
  .patch(ctl.updateLinksDocs)
  .delete(ctl.deleteLinksDocs);

module.exports = router;
