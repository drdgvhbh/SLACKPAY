const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const SHA256 = require("crypto-js/sha256");
const request = require('request');
const crypto = require('crypto')

const options = {
  url: 'https://gateway-web.beta.interac.ca/publicapi/api/v1/access-tokens',
  headers: {
    secretKey: 'LWRTZP8IxIxUiBP44lrC5FVs8F2n1Q7B9gSSMd7vVJ44',
    salt: Base64Encode(SHA256(generateSalt() + ':' + 'LWRTZP8IxIxUiBP44lrC5FVs8F2n1Q7B9gSSMd7vVJ44')),
    thirdPartyAccessId: 'CA1TAJUfdZUFvS95'
  }
};

function generateSalt() {
  //return Math.round((new Date().valueOf() * Math.random())) + '';
  Crypto.randomBytes('256', function(err, buf) {
      if (err) {
        throw err;
      }
      return buf;
  });
  // return Crypto.randomBytes('256'); // fails to
}

function Base64Encode(str, encoding = 'utf-8') {
  var bytes = new (TextEncoder || TextEncoderLite)(encoding).encode(str);        
  return base64js.fromByteArray(bytes);
}

function Base64Decode(str, encoding = 'utf-8') {
  var bytes = base64js.toByteArray(str);
  return new (TextDecoder || TextDecoderLite)(encoding).decode(bytes);
}

function callback2(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
}

/**
* /hello
*
*   Basic "Hello World" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  request(options, callback2);
  callback(null, {
    text: SHA256(generateSalt() + ':' + 'LWRTZP8IxIxUiBP44lrC5FVs8F2n1Q7B9gSSMd7vVJ44'),
    attachments: [
      // You can customize your messages with attachments.
      // See https://api.slack.com/docs/message-attachments for more info.
    ]
  });
};
