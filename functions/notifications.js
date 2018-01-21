const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const message = require('../utils/message.js');

/**
* A notification function
* @returns {any}
*/
module.exports = (context, callback) => {
  console.log("NOTIFICATIONS");
  return message(process.env.SLACK_BOT_TOKEN, 'C8V93R9MW', {
    text: 'Payment Received!'
  }, callback);
};
  