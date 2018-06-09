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

const getCLientApp = (pid) => {
    return knex('clients')
           .join('appointments', 'appointments.client_id', '=', 'clients.user_id')
           .join('services', 'services.id', '=', 'appointments.service_id')
           .select('*')
           .returning('id')
           .where('appointments.provider_id', pid)
        //    .asCallback( function (err, result){
        //     if (err) {
        //         return console.error("error running query", err);
        //       }
        //         return result;
        //     })
        //    .catch(function(err){
        //     console.error("error appointments query", err);
        // });
};

exports.getCLientApp = getCLientApp;


