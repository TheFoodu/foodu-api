const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

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
        .then( function(id) {
        return database('bookings').select("*")
        .where({
            date: body.date,
            foodtruck_auth_id: body.auth_id
            })
            .update({
                venue_id: id,
                status: 'pending',
                foodtruck_auth_id: body.authId,
                date: body.date
            })
        })
    }
}


module.exports = Venue