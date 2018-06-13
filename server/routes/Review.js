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

const postFeedback = (cid, pid, rating, description) => {
  return knex('reviews')
          .insert({client_id: cid, provider_id: pid, rating: rating, description: description})
          .then((arrayOfResults) => arrayOfResults[0])
          .catch(function(err){
            console.error("error appointments query", err);
  });
};

const getReviews = (cid) => {
  return knex('appointments')
     .join('services', 'appointments.service_id', '=', 'services.id')
     .join('providers', 'appointments.provider_id', '=', 'providers.id')
     .join('reviews', 'appointments.provider_id', '=', 'reviews.id')
     .select(
              {'aid': 'appointments.id'},
              {'service_name': 'services.name'},
              {'date': 'appointments.date'},
              {'description':  'reviews.description'},
              {'rating':  'reviews.rating'},
              'providers.*'
        )
     .where('appointments.client_id', cid)
};



exports.addReview = addReview;
exports.postFeedback = postFeedback;
exports.getReviews = getReviews;


