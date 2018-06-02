
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookings').del()
    .then(function () {
      // Inserts seed entries
      return knex("bookings").insert([
        {
          foodtruck_id: 1,
          venue_id: 1,
          date: "2018-07-02",
          status: "confirmed",
          time_range: "1:00 - 4:00"
        },
        {
          foodtruck_id: 1,
          venue_id: null,
          date: "2018-07-04",
          status: "available",
          time_range: "6:00 - 9:00"
        }
      ]);;
    });
};
