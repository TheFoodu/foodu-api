
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookings').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookings').insert([
        {
          foodtruck_id: 1,
          venue_id: 1,
          date: '2018-07-02 00:00:00',
          status: 'confirmed'
        },
        {
          foodtruck_id: 1,
          venue_id: null,
          date: '2018-07-04 00:00:00',
          status: 'available'
        }
      ]);;
    });
};
