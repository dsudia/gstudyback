var express = require('express');
var router = express.Router();
var helpers = require('../lib/helpers');
var login = require('./userRoutes/loginUser');
var add = require('./userRoutes/addUser');

router.post('/login', function(req, res, next) {
  login(req, res, next);
});

router.post('/add', function(req, res, next) {
  add(req, res, next);
});

module.exports = router;
