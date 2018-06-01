const express = require("express");
const router = express.Router();
const bookingsController = require("../../../controllers/bookingsController");

router.get('/', bookingsController.index)

module.exports = router;