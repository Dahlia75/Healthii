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

const addBook = (cid, pid, sid, date, time) => {
	console.log("==>",cid, pid, sid);
  return knex('appointments')
          .insert({
            client_id: cid,
            provider_id: pid,
            service_id: sid,
            date: date,
            start_time: time,
            status: 'pending' })
          .returning('id')
          .then((arrayOfResults) => arrayOfResults[0])
          .catch(function(err){
            console.error("error appointments query", err);
  });
};

exports.addBook = addBook;


