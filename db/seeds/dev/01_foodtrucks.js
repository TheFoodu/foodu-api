exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foodtrucks').del()
    .then(function () {
      // Inserts seed entries
      return knex("foodtrucks").insert([
        {
          id: 1,
          foodtruck_name: "Burger Bash",
          foodtruck_legal_name: "Burger Bash",
          foodtruck_license_id: 10003444445555
        }
      ]);
    });
};
