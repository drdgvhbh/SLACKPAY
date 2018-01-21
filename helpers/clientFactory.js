const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const crypto = require("crypto");
const axios = require('axios');

function getSalt() {
  return crypto.randomBytes(16).toString('hex');
}

const salt = '1234';

let accessToken = undefined;

const encryptedKey = crypto.createHash("sha256");
encryptedKey.update(
  salt + ':iT9-Yyw5zwHanfCc5m4dfMNZXLcJlRAAYGsx8ic4vMY', 
  'utf-8'
); 

const axiosAccessTokenClient = axios.create({
  baseURL: 'https://gateway-web.beta.interac.ca/publicapi/api/v1/',
  timeout: 1000,
  headers: {
    secretKey: encryptedKey.digest('base64'),
    salt: salt,
    thirdPartyAccessId : 'CA1TABcP8Z47Dh5J'
  }
});

module.exports = async () => {
  if (accessToken == undefined) {
    let response = await axiosAccessTokenClient.get('/access-tokens', {});
    accessToken = response.data.access_token;
  }
 // console.log(accessToken);
  const instance = axios.create({
      baseURL: 'https://gateway-web.beta.interac.ca/publicapi/api/v2/',
      timeout: 5000,
      headers: {
        accessToken: 'Bearer ' + accessToken,
        thirdPartyAccessId: 'CA1TABcP8Z47Dh5J',
        requestId: 'requestid123456',
        deviceId: 'deviceid123456',
        apiRegistrationId: 'CA1AR29fqE8Qn4by'
      }
    });
  //console.log(instance);
  return instance;
};