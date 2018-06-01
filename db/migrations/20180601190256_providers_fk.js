exports.up = function(knex, Promise) {
  return knex.schema.alterTable('providers', table => {
	table.foreign('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('providers', function(table){
	table.dropForeign('user_id');
  });
};