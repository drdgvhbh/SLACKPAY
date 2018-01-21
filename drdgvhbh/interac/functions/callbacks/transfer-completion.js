/**
* A basic Hello World function
* @returns {any}
*/
module.exports = (context, callback) => {
  /*   console.log("transfer completion");
    console.log(context.params) */
    callback(null, context.params);
};
  