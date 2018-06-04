const key = require("./key.js");
const authToken = key.twilio_key;
const accountSid = key.accountSid;
const client = require('twilio')(accountSid, authToken);

module.exports = notify = (clientID, messageString) => {
client.messages
  .create({
     body: `You have a request from clientID: ${clientID}, for ${messageString}, Please confirm with Yes/No .`,
     from: '+15017122661',
     to: key.swNumber //change to destination telephone
   })
  .then(message => console.log(message.sid))
  .done();
};
