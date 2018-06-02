
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1,  client_id: 1,  provider_id:1, rating: 3, description:'', date:''},
        {id: 2,  client_id: 2,  provider_id:2, rating: 4, description:'', date:''},
        {id: 3,  client_id: 3,  provider_id:3, rating: 2, description:'', date:''},
        {id: 4,  client_id: 4,  provider_id:4, rating: 5, description:'', date:''},
        {id: 5,  client_id: 5,  provider_id:5, rating: 4, description:'', date:''},
        {id: 6,  client_id: 6,  provider_id:6, rating: 5, description:'', date:''},
        {id: 7,  client_id: 7,  provider_id:7, rating: 3, description:'', date:''},
        {id: 8,  client_id: 8,  provider_id:8, rating: 4, description:'', date:''},
        {id: 9,  client_id: 9,  provider_id:9, rating: 2, description:'', date:''},
        {id: 10, client_id: 10, provider_id:10, rating: 5, description:'', date:''},
        {id: 11, client_id: 11, provider_id:11, rating: 3, description:'', date:''},
        {id: 12, client_id: 12, provider_id:12, rating: 4, description:'', date:''},
        {id: 13, client_id: 13, provider_id:13, rating: 4, description:'', date:''},
        {id: 14, client_id: 14, provider_id:14, rating: 5, description:'', date:''},
        {id: 15, client_id: 15, provider_id:15, rating: 3, description:'', date:''}
      ]);
    });
};
