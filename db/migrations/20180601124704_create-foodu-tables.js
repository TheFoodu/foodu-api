
exports.up = function(knex, Promise) {
    return knex.schema.createTable('venues', (table) => {
        table.increments('id').primary();
        table.string('venue_name');
        table.string('address_street');
        table.string('address_city');
        table.string('address_state');
        table.string('address_zip');
        table.decimal('latitude');
        table.decimal('longitude');
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    })
    .createTable('foodtrucks', (table) => {
        table.string('auth_id').primary();
        table.string('foodtruck_name');

        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    })
    .createTable('bookings', (table) => {
        table.increments('id').primary();
        table.string("foodtruck_auth_id").unsigned();
        table.integer('venue_id').unsigned().defaultTo(null);
        table
          .foreign('foodtruck_auth_id').onDelete('cascade');
        table
          .foreign('venue_id').references('venues.id').onDelete('set null');
        table.date('date');
        table.string('status').defaultTo('available')
        table.string('time_range')

        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTable('bookings')
        .dropTable('venues')
        .dropTable('foodtrucks');
};
