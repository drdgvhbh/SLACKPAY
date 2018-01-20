const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const clientFactory = require('../../helpers/clientFactory.js');
const message = require('../../utils/message.js');

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
  message(botToken, channel, 'Okay. Adding ' + text + ' to contacts.', () => {});
  const client = await clientFactory();
  let responseText = text + ' was added to contacts.';
  try {
    const response = await client.post('/contacts', {
      "contactId": "string",
      "contactName": text,
      "contactHash": "string",
      "language": "en",
      "notificationPreferences": [
        {
          "handle": "6478623697",
          "handleType": "sms",
          "active": true
        }
      ]
    });  
    console.log(response.data.contactId);
  } catch (err) {
    responseText = 'Could not add' + text + 'as a contact.';
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
