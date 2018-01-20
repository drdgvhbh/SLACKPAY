const lib = require('lib')({token: process.env.STDLIB_TOKEN});



const options = {
  url: 'https://gateway-web.beta.interac.ca/publicapi/api/v1/access-tokens',
  headers: {
    secretKey: '',
    salt: '',
    thirdPartyAccessId: ''
  }
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
  //console.log(sha256(generateSalt() + ':' + 'LWRTZP8IxIxUiBP44lrC5FVs8F2n1Q7B9gSSMd7vVJ44') + '');
  console.log(options);
  request.get(options, (error, response, body) => {
    console.log('SFUIOSHGIEHRFIOF');
    var info = JSON.parse(body);
    console.log(info);
    if (!error && response.statusCode == 200) {

    } 

    //  console.log(error, response, body);
    callback(null, {});
  });
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
