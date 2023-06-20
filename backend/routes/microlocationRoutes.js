const express = require("express");
const {
  getMicroLocation,
  getMicrolocationByCity,
} = require("../controller/microlocationController");
const router = express.Router();

router
  .get("/microlocations", getMicroLocation)
  .post("/microbycity", getMicrolocationByCity);

module.exports = router;
