const express = require("express");
const router = express.Router();
const bookingsController = require("../../../controllers/bookingsController");

router.get('/', bookingsController.index)
router.post('/', bookingsController.create)

module.exports = router;