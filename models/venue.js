const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];
const database = require("knex")(configuration);

let Venue = {
    new: function(body) {
        return database('venues')
            .whereNot('venue_name', body.venueName)
            .insert({
                'venue_name': body.venueName,
                'address_street': body.street,
                'address_city': body.city,
                'address_state': body.state,
                'address_zip': body.zip,
                'latitude': body.latitude,
                'longitude': body.longitude
            }).then(function(venue) {
                return database('bookings')
                    .where({date: body.date, foodtruck_auth_id: body.auth_id})
                    .update({ status: 'pending', venue_id: venue.id })
            })
    }
}

module.exports = Venue