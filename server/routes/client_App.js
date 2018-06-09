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
    return knex('appointments')
           .join('clients', 'appointments.client_id', '=', 'clients.id')
           .join('services', 'appointments.service_id', '=', 'services.id')
           .select(
                    {'aid': 'appointments.id'},
                    {'pid': 'appointments.provider_id'},
                    {'sid': 'services.id'},
                    {'service_name': 'services.name'},
                    {'date': 'appointments.date'},
                    {'time': 'appointments.start_time'},
                    {'status': 'appointments.status'},
                    'clients.*'
              )
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
         