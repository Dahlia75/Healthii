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
           .select('*')
           .returning('id')
           .where('service_provider.service_id', sid)
           .asCallback( function (err, result){
            if (err) {
                return console.error("error running query", err);
              }
               console.log(result);
                return result;
            })
           .catch(function(err){
            console.error("error appointments query", err);
        });

};


exports.getProvidersList = getProvidersList;

