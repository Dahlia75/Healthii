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
const pg 		  = require('pg');
const knexLogger  = require('knex-logger');
const Appointment = require("./routes/Appointment");
const Review 	  = require("./routes/Review");
const Service 	  = require("./routes/Service");
const Provider 	  = require("./routes/Provider");
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
		.then(value => {
			value.forEach(function(entry) {
    			selected_provider.push(
				  { sid: entry.id,
					service_name: entry.name,
					providers: [{
								pid: entry.provider_id,
								name: (entry.first_name) +" "+ (entry.last_name),
								title: entry.title,
								bio: entry.bio,
								gender: entry.gender,
								age: entry.age,
								app_slots: [Provider.getAppointmentsTimes(entry.id,entry.provider_id)],
								image: entry.image
								},
								]
					},
    				);
			});
			res.json(selected_provider);
		})
})

app.post("/", (req, res) => {
  var cid = req.body.CID;
  var pid = req.body.PID;
  var sid = req.body.SID;
  Appointment.addAppointment(cid, pid, sid);
  res.json({result:"true"});
});

app.listen(PORT, ()=> {
	console.log('Listen on port'+ PORT)
})
