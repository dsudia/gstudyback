
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table) {
    table.increments();
    table.integer('deck_id').references('id').inTable('decks').notNullable();
    table.string('question').notNullable();
    table.string('answer').notNullable();
    table.integer('score');
    table.string('q_img');
    table.string('a_img');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
