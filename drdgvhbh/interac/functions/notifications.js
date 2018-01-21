/**
* A basic Hello World function
* @returns {any}
*/
module.exports = (context, callback) => {
    console.log(":D");
    console.log(context.params)
    callback(null, context.params);
  };
  