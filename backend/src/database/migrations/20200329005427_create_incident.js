
exports.up = function (knex) {
  return knex.schema.createTable('incident', function (t) {
    t.increments();
    t.string('title').notNullable();
    t.string('description').notNullable();
    t.decimal('value').notNullable();

    t.string('ong_id').notNullable();
    t.foreign('ong_id').references('id').inTable('ong');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('incident')
};
