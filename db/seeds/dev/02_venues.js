exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      // Inserts seed entries
      return knex('venues').insert([
        {
          id: 1,
          venue_name: 'Wild Women Winery',
          venue_legal_name: 'Wild Women Winery',
          liquor_license_type: 'Sales Room Wine',
          liquor_license_id: 42506160001,
          license_exp_date: '2018-07-02 00:00:00',
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
