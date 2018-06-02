const express = require("express");
const router = express.Router();
const venuesController = require("../../../controllers/venuesController");

router.post("/", venuesController.create)

module.exports = router;
