var express = require('express');
var router = express.Router();
var helpers = require('../lib/helpers');
var login = require('./userRoutes/loginUser');

router.get('/login', function(req, res, next) {
  login(req, res, next);
});

module.exports = router;
