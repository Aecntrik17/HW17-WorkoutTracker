const express = require("express");
const Router = express.Router();
const path = require("path");

Router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
Router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
Router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = Router;
