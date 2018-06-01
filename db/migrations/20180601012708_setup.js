
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('appointments', function(table){
      table.increments('id').primary();
      table.string('client_id');
      table.string('provider_id');
      table.string('service_id');
      table.string('date');
      table.string('start_time');
      table.string('end_time');
      table.integer('total_price');
      table.string('report');
      table.string('status');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('appointment')
  ])
};
