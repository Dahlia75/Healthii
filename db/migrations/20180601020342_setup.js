
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('providers', function(table){
      table.increments('id').primary();
      table.string('user_id');
      table.string('first_name');
      table.string('last_name');
      table.string('title');
      table.string('bio');
      table.string('gender');
      table.string('age');
      table.string('image');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('providers')
  ])
};
