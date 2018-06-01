
exports.up = function(knex, Promise) {
    return knex.schema.createTable('foodtrucks', (table) => {
        table.uuid('id').primary();
        table.string('foodtruck_name');
        table.string('foodtruck_legal_name');
        table.bigInteger('foodtruck_license_id');
    
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('foodtrucks');
};
