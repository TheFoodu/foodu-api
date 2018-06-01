
exports.up = function(knex, Promise) {
    return knex.schema.createTable('venues', (table) => {
        table.uuid('id').primary();
        table.string('venue_name');
        table.string('venue_legal_name');
        table.string('liquor_license_type');
        table.bigInteger('liquor_license_id');
        table.date('license_exp_date');
        table.string('address_street');
        table.string('address_city');
        table.string('address_state');
        table.string('address_zip');
        
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    })
    .createTable('foodtrucks', (table) => {
        table.uuid('id').primary();
        table.string('foodtruck_name');
        table.string('foodtruck_legal_name');
        table.bigInteger('foodtruck_license_id');

        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    })
    .createTable('bookings', (table) => {
        table.uuid('id').primary();
        table.integer("foodtruck_id").unsigned();
        table.integer('venue_id').unsigned();
        table
          .foreign('foodtruck_id');
        table
          .foreign('venue_id');
        table.date('date');
        table.string('status').defaultTo('available')

        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTable('bookings')
        .dropTable('venues')
        .dropTable('foodtrucks');
};
