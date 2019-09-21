const express = require("express");
const next = require("next");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

require("dotenv").config();

app.prepare().then(() => {
  const server = express();

  server.get("/fileViewer/:id", (req, res) => {
    app.render(req, res, "/fileViewer");
  });

  server.get("/docsData/:cat", (req, res) => {
    app.render(req, res, "/docsData");
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> listening on port: ${port}`);
  });
});
