
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('clients', function(table){
      table.increments('id').primary();
      table.string('user_id');
      table.string('first_name');
      table.string('last_name');
      table.string('phone');
      table.string('address');
      table.string('gender');
      table.string('age');
      table.string('m_history');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('clients')
  ])
};
