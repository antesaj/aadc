const bodyParser = require("body-parser");
const controller = require("../controllers/controller");

module.exports = (app, router) => {
  app.use(bodyParser.json());

  // TODO: Remove test route.
  router.route("/test").get(controller.handleTest);
  app.use("/api", router);

  // Handle production environment
  if (process.env.NODE_ENV === "production") {
    // Express will serve up production assets.
    app.use(express.static("client/build"));
    // Express will serve up index.html if doesn't recognize route.
    const path = require("path");
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
};
