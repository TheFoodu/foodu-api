const Booking = require('../models/booking.js')

const index = function(req, res, next) {
    Booking.all()
        .then(function(bookings) {
            if(!bookings){
                return res.sendStatus(404)
            } else {
                res.json(bookings)
            }
        })
}

module.exports = { index }