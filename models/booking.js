const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

let Booking = {

    all: function() {
        return database('bookings').select('*')
            .leftOuterJoin('venues', 'bookings.venue_id', 'venues.id')
            .then(function(bookings) {
                return bookings
            })
    },

    new: function(body) {
        body.selectDates.forEach(function(e) {
            return database('bookings')
                .insert({ 
                    'foodtruck_auth_id': body.authId,
                    'date': e,
                })
        })
    }
}

module.exports = Booking