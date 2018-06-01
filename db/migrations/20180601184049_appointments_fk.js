exports.up = function(knex, Promise) {
  return knex.schema.alterTable('appointments', table => {
    table.foreign('client_id').references('clients.id');
    table.foreign('provider_id').references('providers.id');
    table.foreign('service_id').references('services.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('appointments', function(table){
    table.dropForeign('client_id');
    table.dropForeign('provider_id');
    table.dropForeign('service_id');
  });
};