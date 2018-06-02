const Venue = require('../models/venue.js')

const create = function(req, res, next) {
    Venue.new(req.body)
        .then(function(venue) {
            if (!venue) {
                return res.sendStatus(404)
            } else {
                return res.sendStatus(201)
            }
        })
}

module.exports = { create }