
exports.up = function(knex, Promise) {
    return knex.schema.createTable('venues', (table) => {
        table.increments('id').primary();
        table.string('venue_name');
        table.string('venue_legal_name');
        table.string('liquor_license_type');
        table.bigInteger('liquor_license_id');
        table.date('license_exp_date');
        table.string('address_street');
        table.string('address_city');
        table.string('address_state');
        table.string('address_zip');
        table.decimal('latitude');
        table.decimal("longitude");
        
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    })
    .createTable('foodtrucks', (table) => {
        table.increments('id').primary();
        table.string('foodtruck_name');
        table.string('foodtruck_legal_name');
        table.bigInteger('foodtruck_license_id');

        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    })
    .createTable('bookings', (table) => {
        table.increments('id').primary();
        table.integer("foodtruck_id").unsigned();
        table.integer('venue_id').unsigned().defaultTo(null);
        table
          .foreign('foodtruck_id').references('foodtrucks.id').onDelete('cascade');
        table
          .foreign('venue_id').references('venues.id').onDelete('set null');
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
