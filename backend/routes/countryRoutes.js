const express = require("express");
const {
  getCountries,
  getCountryById,
} = require("../controller/countryController");
const router = express.Router("../controller/countryController.js");

router.get("/countries", getCountries).get("/country/:id", getCountryById);

module.exports = router;
