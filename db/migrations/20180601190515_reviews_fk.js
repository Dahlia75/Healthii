exports.up = function(knex, Promise) {
  return knex.schema.alterTable('reviews', table => {
    // table.foreign('client_id').references('clients.id').inTable('clients').onDelete('CASCADE');
    table.foreign('client_id').references('clients.id');
    table.foreign('provider_id').references('providers.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('reviews', function(table){
    table.dropForeign('client_id');
    table.dropForeign('provider_id');
  });
};