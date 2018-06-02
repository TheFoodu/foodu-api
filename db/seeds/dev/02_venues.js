exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      // Inserts seed entries
      return knex('venues').insert([
        {
          id: 1,
          venue_name: 'Wild Women Winery',
          address_street: '1660 CHAMPA STREET',
          address_city: 'Denver',
          address_state: 'CO',
          address_zip: '80202',
          latitude: 39.749, 
          longitude: -105.008,
        }
      ]);
    });
};
