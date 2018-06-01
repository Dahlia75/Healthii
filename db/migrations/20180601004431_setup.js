
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('reviews', function(table){
      table.increments('id').primary();
      table.string('client_id');
      table.string('provider_id');
      table.string('rating');
      table.string('description');
      table.string('date');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('reviews')
  ])
};
