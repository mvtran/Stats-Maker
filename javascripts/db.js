/*
  A wrapper for connecting to the MongoDB database.
*/

var MongoClient = require('mongodb').MongoClient;

// The Database "class" (function prototype) which stores the db connection.
function DB() {
  this.db = null;
}

DB.prototype.connect = function(uri) {

  // Save a reference to "this" to use in the Promise function
  var _this = this;

  return new Promise(function(resolve, reject) {
    if (_this.db) {
      // Already connected
      resolve();
    } else {
      var __this = _this;

      MongoClient.connect(uri)
      .then(
        function(database) { // function that is called upon success
          __this.db = database; // simply store the database connection object
          resolve();
        },
        function(err) { // function called if connection was a failure
          console.log("Error connecting: " + err.message);
          reject(err.message);
        }
      )
    }
  })
}

DB.prototype.close = function() {
  if (this.db) {
    this.db.close()
    .then(
      function() {}, // closed successfully; no need to do anything else
      function(err) { // failed to close; just log it
        console.log("Failed to close the database: " + err.message);
      }
    )
  }
}

module.exports = DB;
