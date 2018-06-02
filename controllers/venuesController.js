const Venue = require('../models/venue.js')

const create = function(req, res, next) {
    return Venue.new(req.body)
        .then(function(venue) {
            return venue
        })
}

const update = function(venueId, req, res, next) {
   Venue.update(req.body, venueId)
        .then(function(venue) {
            if(!venue) {
                return res.sendStatus(404)
            } else {
                return res.sendStatus(200)
            }
        })
}

const upsert = function(req, res, next) {
    let id = create(req, res, next)
    update(id, req, res, next)
}


module.exports = { upsert }