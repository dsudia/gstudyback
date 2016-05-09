var express = require('express');
var router = express.Router();
var helpers = require('../lib/helpers');
var add = require('./deckRoutes/addDeck');
var getDecks = require('./deckRoutes/getDecks');

router.get('/add/:userId', function(req, res, next) {
  add(req, res, next);
});

router.get('/:userId', function(req, res, next) {
  getDecks(req, res, next);
});

module.exports = router;
