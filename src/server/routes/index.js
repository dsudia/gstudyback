var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
var passport = require('../lib/passport');
var bcrypt = require('bcrypt');
var helpers = require('../lib/helpers');

router.get('/', function(req, res, next) {
  res.status(200).send('This is a NEAP webserver you\'ve got here!');
});

module.exports = router;
