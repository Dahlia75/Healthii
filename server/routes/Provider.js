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

const getProvidersList = (sid) => {
    return knex('providers')
           .join('service_provider', 'providers.id', '=', 'service_provider.provider_id')
           .join('services', 'services.id', '=', 'service_provider.service_id')
           .select(
              {'service_name': 'services.name'},
              {'service_id': 'services.id'},
              'providers.*'
            )
           .where('service_provider.service_id', sid)
};

const getProviderInfo = (pid) => {
    return knex('providers')
           .select('*')
           .where('id', pid)
};

const getAppointmentsTimes = (sid,pid) => {
    return knex('appointments')
           .select('*')
           .returning('id')
           .where({
            provider_id: pid,
            service_id: sid
           })
        //    .asCallback( function (err, result){
        //     if (err) {
        //         return console.error("error running query", err);
        //       }
        //         console.log("appoinments ", result);
        //         return result;
        //     })
        //    .catch(function(err){
        //     console.error("error appointments query", err);
        // });
};

const getReviews = (pid) => {
    return knex('reviews')
           .join('clients', 'clients.id', '=', 'reviews.client_id')
           .join('providers', 'providers.id', '=', 'reviews.provider_id')
           .select(
                {'client_first_name': 'clients.first_name'},
                {'client_last_name': 'clients.last_name'},
                {'client_id': 'clients.id'},
                {'reviews_rating': 'reviews.rating'},
                {'reviews_des': 'reviews.description'},
              )
           .where({
            provider_id: pid,
           })
};

exports.getProvidersList = getProvidersList;
exports.getAppointmentsTimes = getAppointmentsTimes;
exports.getReviews = getReviews;
exports.getProviderInfo = getProviderInfo;