
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('service_provider', function(table){
      table.increments('id').primary();
      table.string('provider_id');
      table.string('service_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('service_provider')
  ])
};
