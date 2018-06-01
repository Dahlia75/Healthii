
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('reviews', function(table){
      table.increments('id').primary();
      table.integer('client_id');
      table.integer('provider_id');
      table.integer('rating');
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
