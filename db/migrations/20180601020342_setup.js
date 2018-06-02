
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('providers', function(table){
      table.integer('id').primary();
      table.integer('user_id');
      table.string('first_name');
      table.string('last_name');
      table.string('title');
      table.text('bio');
      table.string('gender');
      table.integer('age');
      table.string('image');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('providers')
  ])
};
