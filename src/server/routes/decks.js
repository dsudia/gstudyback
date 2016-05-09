var express = require('express');
var router = express.Router();
var helpers = require('../lib/helpers');
var add = require('./deckRoutes/addDeck');

router.get('/add/:userId', function(req, res, next) {
  add(req, res, next);
});

module.exports = router;
