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

const getUserByEmailAndPassword = (email, password) => {
  console.log("getUserByEmailAndPassword")
  return knex('users')
        .select('*')
        .where({
            email: email,
            password: password
        })
};

module.exports = getUserByEmailAndPassword;