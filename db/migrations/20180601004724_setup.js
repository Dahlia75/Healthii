
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('services', function(table){
      table.increments('id').primary();
      table.string('name');
      table.text('descripton');
      table.string('thumbnail');
      table.integer('price');
      table.string('image');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('services')
  ])
};
