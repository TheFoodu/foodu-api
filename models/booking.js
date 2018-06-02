const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

let Booking = {

    all: function() {
        return database('bookings').select('*')
            .then(function(bookings) {
                return bookings
            })
    },

    new: function(body) {
        return database('bookings')
            .insert({ 
                'foodtruck_auth_id': body.foodTruckId,
                'date': body.date,
            })
    }
}

module.exports = Booking