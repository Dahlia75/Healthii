"use strict";
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

const login = (email,password) => {
    return knex('users')
           .select('*')
           .where({
            email: email,
            password: password
           })
};

exports.login = login;