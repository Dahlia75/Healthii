"use strict";
require('dotenv').config();

const PORT        = process.env.PORT || 3001;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const pg 		  		= require('pg');
const knexLogger  = require('knex-logger');
const Appointment = require("./routes/Appointment");
const Review 	  	= require("./routes/Review");
const Service 	  = require("./routes/Service");
const Provider 	  = require("./routes/Provider");
const book        = require("./routes/book_App");
const clientsApp	= require("./routes/client_App");
const users         = require("./routes/users");
const cookieSession = require('cookie-session');
const getUser     = require("./routes/Login");

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

app.use(cookieSession({
  secret: 'Health Care to Go',
}));
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
    })
});

app.get("/api/clients",(req,res) => {
  var pid;
   getUser.getUserById(req.session.userId, 'providers')
     .then((id) => {
       if (id !== undefined) {
         pid = id[0].id;
         return pid;
       } else {
         res.status(401).json({ error: 'You are dumb' });
       }
     })
    .then((pid) => {return clientsApp.getCLientApp(pid)})
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
                  report: clients.report,
                  aid: clients.aid,
                  service_name: clients.service_name,
                  service_id: clients.sid,
                  provider_id: clients.pid,
                  date: clients.date,
                  start_time: clients.time,
                  status: clients.status,
                })
       })
      )
      .then(clients_of_pid => {
        // console.log("clients_of_pid", clients_of_pid);
        res.json(
              clients_of_pid
            );
      })
    })
    .catch(ex => {
      console.error(ex);
      res.status(500).json({ error: ex.message })
    });
});

app.get("/api/reviews",(req,res) =>{
  // var cid = req.session.userId;
  var cid = 15;
  Review.getReviews(cid)
  .then(allReviews => {
    // const [{ aid, service_name, date}] = allReviews;
    return Promise.all(

      allReviews.map((providers, i) => {
        const [{ aid, service_name, date}] = allReviews;

        return ({
                aid: aid,
                service_name: service_name,
                date: date,
                pid: providers.user_id,
                service_name: providers.service_name,
                name: providers.first_name+" "+ providers.last_name,
                m_history: providers.m_history,
                gender: providers.gender,
              })
     })
    )
    .then(providersList => {
      res.json(
            // aid: providersList.aid,
            // service_name: providersList.service_name,
            // date: providersList.date,
            providersList
          );
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

app.post("/appointments/:aid/confirmation", (req, res) => {
  var aid = req.params.aid;
  book.confirm(aid, req.body.status);
  res.json({result:"true"});
});

app.post("/api/reviews/:rid/feedback", (req, res) => {

  // Reading parameters from "cookies" or "req.body.CID";
  var cid = req.session.userId;
  var pid = req.params.pid;
  var description = req.body.des;
  var rating = 0;
  Review.postFeedback(cid, pid, rating, description);
  res.json({result:"true"});
});

app.post("/services/:sid/providers/:pid/book", (req, res) => {
  var cid = req.session.userId;
  var pid = req.params.pid;
  var sid = req.params.sid;
  book.addBook(cid, pid, sid, req.body.data.selectedDate, req.body.data.selectedTime);
  res.json({result:"true"});
});

app.post('/api/login', (req, res) => {
  getUser.getUserByEmailAndPassword(req.body.email, req.body.password)
    .then((user) => {
      if (user) {
        req.session.userId = user[0].id;
        res.json(user[0]);
      } else {
        res.status(400).json({ error: 'No user' });
      }
    });
});

app.post('/api/logout', (req, res) => {
  req.session = null;
  res.json({ message: 'You logged out.' });
});

app.listen(PORT, ()=> {
	console.log('Listen on port'+ PORT)
})