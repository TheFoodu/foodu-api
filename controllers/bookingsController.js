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

const create = function(req, res, next) {
    Booking.new(req.body)
        .then(function(booking) {
            if (!booking) {
                return res.sendStatus(404)
            } else {
                return res.sendStatus(201)
            }
        })
}

module.exports = { index, create }