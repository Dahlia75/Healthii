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

const getServicesList = () => {

  return knex('services')
    .select('*')
    .returning('id')
    .asCallback( function (err, result){
        if (err) {
          return console.error("error running query", err);
        }
          return result;
      })
    .catch(function(err){
      console.error("error appointments query", err);
  });
};


exports.getServicesList = getServicesList;

