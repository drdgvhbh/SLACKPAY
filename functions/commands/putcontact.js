const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const clientFactory = require('../../helpers/clientFactory.js');

/**
* /addContact
*
*   Adds a contact in the Interact API
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
module.exports = async (user, channel, text = '', command = {}, botToken = null) => {
  const client = await clientFactory();
  var params = text.split(' ');
  let responseText = 'Updated \"' + text + '\" contact.';
  if (params.length != 3) {
    responseText = '[Error] Paramaters must match \"contactName, handle, handleType\".';
    throw new Error(responseText);
  }
  try {
    const response = await client.put('/contacts/' + params[0], {
      "contactId": "string",
      "contactName": params[0],
      "contactHash": "string",
      "language": "en",
      "notificationPreferences": [
        {
          "handle": params[1],
          "handleType": params[2],
          "active": true
        }
      ]
    });  
  } catch (err) {
    console.log(err);
    responseText = 'Failed to update \"' + params[0] + '\" contact. \"' + params[0] + '\" does not exist as a contact.';
  }
  const result = {
    text: responseText,
    attachments: [
      // You can customize your messages with attachments.
      // See https://api.slack.com/docs/message-attachments for more info.
    ]
  };
  return result;
};
