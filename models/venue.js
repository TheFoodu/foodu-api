const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);
pry = require("pryjs");

let Venue = {
    new: function(body) {
        return database('venues').select("*")
        .insert({
            'venue_name': body.venueName,
            'address_street': body.street,
            'address_city': body.city,
            'address_state': body.state,
            'address_zip': body.zip,
            'latitude': body.latitude,
            'longitude': body.longitude
        })
        .returning('id')
    },

    update: function(body, venueId) {
        return venueId
        .then(idArr => {
            let id = idArr[0]
            return database('bookings').select("*")
            .where({
                date: body.date,
                foodtruck_auth_id: body.authId
            })
            .update({
                venue_id: id,
                status: 'pending',
                foodtruck_auth_id: body.authId,
                date: body.date,
                time_range: ""
            })
            .returning("*")
        })
    }
}


module.exports = Venue