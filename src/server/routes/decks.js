var express = require('express');
var router = express.Router();
var helpers = require('../lib/helpers');
var add = require('./deckRoutes/addDeck');
var getDecks = require('./deckRoutes/getDecks');
var delDeck = require('./deckRoutes/deleteDeck');

router.get('/add/:userId', function(req, res, next) {
  add(req, res, next);
});

router.get('/:userId', function(req, res, next) {
  getDecks(req, res, next);
});

router.delete('/:deckId', function(req, res, next) {
  delDeck(req, res, next);
})

module.exports = router;
