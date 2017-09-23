var request = require("request");
var express = require('express');
var router 	= express.Router();

var config = require('../config.js');
var DB = require('../javascripts/db');

router.get('/', function(req, res) {
  console.log("GET!!!");
  var testObject = {
    "Pokemon" : "Master"
  }
  res.json(testObject);
});

router.post('/', function(req, res) {
  console.log("Post!");
});

router.post('/addMon', function(req, res) {

});

/* mongodb://localhost:27017/pokemon-collection */

module.exports = router;
