const lib = require('lib')({token: process.env.STDLIB_TOKEN});

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
  console.log(text);
  const client = await clientFactory();
/*   const result = {};
  try {
    const response = await client.post('/contacts', {
      "contactId": "string",
      "contactName": uuidv1(),
      "contactHash": "string",
      "language": "en",
      "notificationPreferences": [
        {
          "handle": text,
          "handleType": "email",
          "active": true
        }
      ]
    });  
    result['contactId'] = response.data.contactId;
    result['contactHash'] = response.data.contactHash;
    console.log(result);
  } catch (err) {
    console.log(err);
  } */
  return result;
};
