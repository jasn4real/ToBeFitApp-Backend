// DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const exerciseController = require("./controllers/exerciseController");
app.use("/exercises", exerciseController);

// ROUTES
app.get("/", (req, res) => {
  res.send("This is my Fitness App");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found!" });
});

// EXPORT
module.exports = app;
