const express = require("express");
const next = require("next");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const tempDocsData = {
  category: 1,
  description: "Flight Itinerary for Rome.",
  url:
    "https://docs.google.com/document/d/1exhSHPk13ZakLIqrymcYIrtsUvEsmZ2O/edit",
  id: 12345
};

app.prepare().then(() => {
  const server = express();

  server.get("/fileViewer/:id", (req, res) => {
    console.log("params", req.params);
    app.render(req, res, "/fileViewer", tempDocsData);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> listening on port: ${port}`);
  });
});
