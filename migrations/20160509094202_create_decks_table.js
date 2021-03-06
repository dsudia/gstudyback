
exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks', function(table) {
    table.increments();
    table.integer('user_id').references('id').inTable('users').notNullable();
    table.string('name').notNullable();
    table.string('descrip');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable();
};
