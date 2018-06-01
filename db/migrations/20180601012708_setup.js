
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('appointments', function(table){
      table.increments('id').primary();
      table.string('client_id');
      table.string('provider_id');
      table.string('service_id');
      table.string('date');
      table.string('from_time');
      table.string('end_time');
      table.string('total_price');
      table.string('no_hours');
      table.string('status');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('appointment')
  ])
};
