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

const addReview = (cid, pid, rating, description) => {

  return knex('reviews')
          .insert({client_id: cid, provider_id: pid, rating: rating, description: description})
          .returning('id')
          .then((arrayOfResults) => arrayOfResults[0])
          .catch(function(err){
            console.error("error appointments query", err);
  });
};


exports.addReview = addReview;


