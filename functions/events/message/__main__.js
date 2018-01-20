const lib = require('lib')({token: process.env.STDLIB_TOKEN});
/* const clientFactory = require('../../../helpers/clientFactory.js');

const crypto = require("crypto");
const axios = require('axios');

const salt = '1234';
let accessToken = '';

const encryptedKey = crypto.createHash("sha256"); 
encryptedKey.update(salt + ':OAzLQhkIh3cg8CFJimsHO2NTwPwOTmdgKBWRlF_1pr8', 'utf-8'); 

const axiosAccessTokenClient = axios.create({
  baseURL: 'https://gateway-web.beta.interac.ca/publicapi/api/v1/',
  timeout: 1000,
  headers: {
    secretKey: encryptedKey.digest('base64'),
    salt: salt,
    thirdPartyAccessId : 'CA1TABcP8Z47Dh5J'
  }
});

function getClient() {
  const instance = axios.create({
    baseURL: 'https://gateway-web.beta.interac.ca/publicapi/api/v2/',
    timeout: 1000,
    headers: {
      accessToken: 'Bearer ' + accessToken,
      thirdPartyAccessId: 'CA1TABcP8Z47Dh5J',
      requestId: 'requestId123',
      deviceId: 'deviceId123',
      apiRegistrationId: 'CA1AR29fqE8Qn4by'
    }
  });
  return instance;
} */

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
/*   //console.log(sha256(generateSalt() + ':' + 'LWRTZP8IxIxUiBP44lrC5FVs8F2n1Q7B9gSSMd7vVJ44') + '');
  console.log(options);
  request.get(options, (error, response, body) => {
    console.log('SFUIOSHGIEHRFIOF');
    var info = JSON.parse(body);
    console.log(info);
    if (!error && response.statusCode == 200) {

    }  */

    //  console.log(error, response, body);
/*     axiosAccessTokenClient.get('/access-tokens', {})
    .then(response => {
      accessToken = response.data.access_token;
      const client = getClient();
      console.log('HELLO WORK');
      client.post('/contacts', {
        "contactName": "Someone Fakename",
        "language": "en",
        "notificationPreferences": [
          {
            "handle": "6478623697",
            "handleType": "sms",
            "active": true
          }
        ]
      }).then(response => {
        console.log(response);
        callback(null, {});
      }).catch(error => {
        console.log(error);
        callback(null, {});
      });
    })
    .catch(error => {
      console.log(error);
      callback(null, {});
    });
    callback(null, {}); */
/*     instance.post('/contacts', {})
    .then(response => {
      console.log('???');
      console.log(response);
      callback(null, {});
    })
    .catch(error => {
      console.log('xd');
      console.log(error);
      callback(null, {});
    }); */
  
/*   console.log('adfssf');
  callback(null, {}); */

  // Only send a response to certain messages
  // if (text.match(/hey|hello|hi|sup/i)) {
  //   callback(null, {
  //     text: "lol"
  //   });
  // } else {
  //   callback(null, {});
  // }


};
