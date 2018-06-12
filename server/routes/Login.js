const settings = require("./settings");

const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  }
});

function getUserById(id, tableName) {
  return knex(tableName)
        .select('id')
        .where('user_id', id)
}

const getUserByEmailAndPassword = (email, password) => {
  return knex('users')
        .select('*')
        .where({
            email: email,
            password: password
        })
};

module.exports = {getUserByEmailAndPassword, getUserById};