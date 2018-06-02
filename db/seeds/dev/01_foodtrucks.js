exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foodtrucks').del()
    .then(function () {
      // Inserts seed entries
      return knex("foodtrucks").insert([
        {
          auth_id: 'CLkh5QadsoOF1he68RXUOrFUIyi1',
          foodtruck_name: "Burger Bash",
        }
      ]);
    });
};
