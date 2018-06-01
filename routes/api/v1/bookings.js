const environment = process.env.NODE_ENV || "development";
const express = require("express");
const router = express.Router();
const configuration = require("../../../knexfile")[environment];
const bookingsController = require("../../../controllers/bookingsController");

router.get('/api/v1/bookings', bookingsController.index)

module.exports = router