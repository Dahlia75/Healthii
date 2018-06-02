const accountSid = 'ACf0a722b774bde52a72bafc852996e05f';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15017122661',
     to: '+15558675310'
   })
  .then(message => console.log(message.sid))
  .done();


// const accountSid = 'AC474791e99da95e1db10223773fb2f19e';
// const key = require("./key.js");
// const authToken = key.twilio_key;
// const client = require('twilio')(accountSid, authToken);

// module.exports = notify = (orderId, orderString) => {
// client.messages
//   .create({
//      body: `OrderID: ${orderId}, ${orderString} Please respond with time estimate.`,
//      from: '+16043730358',
//      to: key.swNumber //change to restaurant telephone
//    })
//   .done();
// };
