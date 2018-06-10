"use strict";
require('dotenv').config();

const PORT          = process.env.PORT || 3001;
const ENV           = process.env.ENV || "development";
const express       = require("express");
const bodyParser    = require("body-parser");
const cookieSession = require('cookie-session');
const app           = express();
const knexConfig    = require("./knexfile");
const knex          = require("knex")(knexConfig[ENV]);
const morgan        = require('morgan');
const pg 		  		  = require('pg');
const knexLogger    = require('knex-logger');
const Appointment   = require("./routes/Appointment");
const Review 	  	  = require("./routes/Review");
const Service 	    = require("./routes/Service");
const Provider 	    = require("./routes/Provider");
const book          = require("./routes/book_App");
const clientsApp    = require("./routes/client_App");
const users	        = require("./routes/users");
// const router 	  = express.Router();

app.use(knexLogger(knex));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(request,response,next){
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested, Content-Type, Accept");
	next();
})
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.use(express.static('public'));

app.get("/api",(req,res) => {
	Service.getServicesList()
		.then(value => {
			res.json(value);
		})
	// res.status(200).send(JSON.stringify(Appointment.getAppointmentList()));
})

app.get("/api/services/:sid/providers",(req,res) => {
	var selected_provider=[];
	Provider.getProvidersList(req.params.sid)
		.then(providers => {
       if (providers.length === 0) {
        return res.status(404).json({ error: 'Provider not found' });
      }
      const [{ service_name, service_id }] = providers;
      return Promise.all(providers.map((provider, i) => {
        return Provider.getAppointmentsTimes(service_id, provider.id)
          .then(app_slots => {
            return {
              pid: provider.id,
              name: `${provider.first_name} ${provider.last_name}`,
              title: provider.title,
              bio: provider.bio,
              gender: provider.gender,
              age: provider.age,
              app_slots,
              image: provider.image
            }
          })

      }))
      .then(providers_with_slots => {
          res.json({
          sid: service_id,
          service_name,
          // reviews: Provider.getReviews(4),
          providers: providers_with_slots,
        })
      })
		})
    .catch(ex => {
      console.error(ex);
      res.status(500).json({ error: ex.message })
    });
})

app.get("/api/clients",(req,res) => {
  var selected_provider=[];
  var pid = 4;
  clientsApp.getCLientApp(pid)
    .then(clients => {

      if (clients.length === 0) {
        return res.status(404).json({ error: 'clients not found' });
      }
      const [{ aid, service_name, sid, pid, date, time, status}] = clients;
      return Promise.all(

        clients.map((clients, i) => {

          return ({
                  cid: clients.user_id,
                  name: clients.first_name+" "+ clients.last_name,
                  service_name: service_name, 
                  service_id: sid,
                  phone: clients.phone,
                  address: clients.address,
                  m_history: clients.m_history,
                  gender: clients.gender,
                  age: clients.age,
                  report: clients.report
                })
       })
      )
      .then(clients_of_pid => {
        res.json({
              id: aid,
              service_name: service_name,
              service_id: sid,
              provider_id: pid,
              date: date,
              start_time: time,
              status: status,
              clientList: clients_of_pid
            });
      })
    })
    .catch(ex => {
      console.error(ex);
      res.status(500).json({ error: ex.message })
    });
});

app.get("/api/services/:sid/providers/:pid",(req,res) =>{
  Provider.getProviderInfo(req.params.pid)
  .then(providerInfo =>{
    const provider = providerInfo;
    return Provider.getReviews(req.params.pid)
    .then(reviews => {
        return {
                p_info: providerInfo,
                reviews: reviews
              }
  })

  .then(provider_with_reviews => {
        res.json( provider_with_reviews)
    })
  })
  .catch(ex => {
    console.error(ex);
    res.status(500).json({ error: ex.message })
  });
});

app.post("api/services/:sid/providers/:pid/book", (req, res) => {
	
  // Reading parameters from "cookies" or "req.body.CID";
  var cid = 14;
  var pid = req.params.pid;
  var sid = req.params.sid;
  var date="";
  var time="";
  book.addBook(cid, pid, sid, date, time);
  res.json({result:"true"});
});

app.post("api/appointments/:aid/confirmation", (req, res) => {
  var aid = req.params.aid;
  book.confirm(aid);
  res.json({result:"true"});
});

app.post("api/reviews/:rid/feedback", (req, res) => {

  // Reading parameters from "cookies" or "req.body.CID";
  var rid = req.params.rid;
  var cid = 13;
  var pid = 6;
  var rating = '';
  var description = '';
  Review.postFeedback(rid, cid, pid, rating, description);
  res.json({result:"true"});
});

app.post("api/login", (req, res) => {

  // Reading parameters from "req.body.CID";

  let email = req.body.email;
  const password = req.body.password;
  user = users.login(email,password)
  if(user){

        req.session.userID = user.id;
        res.redirect("/api");
        // return;

  }else{
      res.json({result:"Login failed"});
  }

  res.end("Email or Password not correctly entered");



  var id = 0;
  Review.postFeedback(rid, cid, pid, rating, description);
  res.json({result:"true"});
});

// app.post("/", (req, res) => {
//   var cid = req.body.CID;
//   var pid = req.body.PID;
//   var sid = req.body.SID;
//   Appointment.addAppointment(cid, pid, sid);
//   res.json({result:"true"});
// });

app.listen(PORT, ()=> {
	console.log('Listen on port'+ PORT)
})

