const express = require("express");
const axios = require("axios");
const key = require("./key");
const routes = require("./routes/routes");

let router = express.Router();
const app = express();

routes(app, router);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
