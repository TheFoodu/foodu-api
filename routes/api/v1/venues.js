const express = require("express");
const router = express.Router();
const venuesController = require("../../../controllers/venuesController");

router.post("/", venuesController.upsert)

module.exports = router;
