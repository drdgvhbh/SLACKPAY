const lib = require('lib')({token: process.env.STDLIB_TOKEN});

const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const request = require('request');
const crypto = require('crypto');
const Base64 = require('js-base64').Base64;

const options = {
  url: 'https://gateway-web.beta.interac.ca/publicapi/api/v1/access-tokens',
  headers: {
    secretKey: 'LWRTZP8IxIxUiBP44lrC5FVs8F2n1Q7B9gSSMd7vVJ44',
    salt: Base64.encode(sha256(generateSalt() + ':' + 'LWRTZP8IxIxUiBP44lrC5FVs8F2n1Q7B9gSSMd7vVJ44') + ''),
    thirdPartyAccessId: 'CA1TAJUfdZUFvS95'
  },
  method: 'GET'
};


function generateSalt() {
  return Math.round((new Date().valueOf() * Math.random())) + '';
/*   crypto.randomBytes('256', function(err, buf) {
      if (err) {
        throw err;
      }
      return buf;
  }); */
  // return Crypto.randomBytes('256'); // fails to
}

/**
* message event
*
*   All events use this template, simply create additional files with different
*   names to add event responses
*
*   See https://api.slack.com/events-api for more details.
*
* @param {string} user The user id of the user that invoked this event (name is usable as well)
* @param {string} channel The channel id the event was executed in (name is usable as well)
* @param {string} text The text contents of the event
* @param {object} event The full Slack event object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', event = {}, botToken = null, callback) => {
/*   console.log('asdf');
  request(options, (error, response, body) => {
    console.log('fdsa');
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      console.log(info);
        // Only send a response to certain messages
      if (text.match(/hey|hello|hi|sup/i)) {
        callback(null, {
          text: Base64.encode(sha256(generateSalt() + ':' + 'LWRTZP8IxIxUiBP44lrC5FVs8F2n1Q7B9gSSMd7vVJ44') + '')
        });
      } else {
        callback(null, {});
      }
    }
  }); */
  console.log('adfssf');
  callback(null, {});



};
