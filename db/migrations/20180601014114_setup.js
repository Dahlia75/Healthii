
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('clients', function(table){
      table.integer('id').primary();
      table.integer('user_id');
      table.string('first_name');
      table.string('last_name');
      table.string('phone');
      table.string('address');
      table.string('gender');
      table.integer('age');
      table.text('m_history');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('clients')
  ])
};
