
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('service_provider', function(table){
      table.increments('id').primary();
      table.integer('provider_id');
      table.integer('service_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('service_provider')
  ])
};
