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
// const router 	  = express.Router();

app.use(knexLogger(knex));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(request,response,next){
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested, Content-Type, Accept");
	next();
})

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
      // console.dir(providers, {colors:true});
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
      const [{ id, service_name, service_id, provider_id, date, start_time, status}] = clients;
      return Promise.all(

        clients.map((clients, i) => {
          
          return ({
                  cid: clients.user_id,
                  name: clients.first_name+" "+ clients.last_name,
                  phone: clients.phone,
                  address: clients.address,
                  m_history: clients.m_history,
                  gender: clients.gender,
                  age: clients.age,
                  report: clients.report,
                })
       })
      )
      .then(clients_of_pid => {
        // console.log("clients==> ",clients);
        res.json({
              id: id, 
              service_name: service_name, 
              service_id: service_id, 
              provider_id: provider_id, 
              date: date, 
              start_time: start_time, 
              status: status,
              clientList: clients
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
    // console.log("===> ",Provider.getReviews(req.params.pid));
  //   .then(providers_with_reviews => {

  //     return Promise.all(providers.map((provider, i) => {
  //       return Provider.getAppointmentsTimes(service_id, provider.id)
          .then(reviews => {
            return {
              p_info: providerInfo,
              reviews: reviews

            }
          })

  //     }))
  // })

  .then(provider_with_reviews => {
        res.json({
        reviews: provider_with_reviews
      })
    })
  })
  .catch(ex => {
    console.error(ex);
    res.status(500).json({ error: ex.message })
  });
});


app.post("/services/:sid/providers/:pid/book", (req, res) => {
	// console.log("Heloooo");
  // var cid = req.body.CID;
  var cid = 14;
  var pid = req.params.pid;
  var sid = req.params.sid;
  book.addBook(cid, pid, sid);
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
