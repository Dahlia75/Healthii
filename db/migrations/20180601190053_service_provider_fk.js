exports.up = function(knex, Promise) {
  return knex.schema.alterTable('service_provider', table => {
    table.foreign('provider_id').references('providers.id');
    table.foreign('service_id').references('services.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('service_provider', function(table){
    table.dropForeign('provider_id');
    table.dropForeign('service_id');
  });
};