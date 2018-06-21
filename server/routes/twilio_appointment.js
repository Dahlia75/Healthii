const key = require("./key.js");
const authToken = key.twilio_key;
const accountSid = key.accountSid;
const client = require('twilio')(accountSid, authToken);

module.exports = notify = (messageString) => {
client.messages
  .create({
     body: messageString,
     from: '+16042295523',
     to: key.swNumber
   })
  .then(message => console.log(message.sid))
  .done();
};
