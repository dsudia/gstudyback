var express = require('express');
var router = express.Router();
var helpers = require('../lib/helpers');
var getCards = require('./cardRoutes/getCards');
var delCard = require('./cardRoutes/deleteCard');

router.get('/:deckId', function(req, res, next) {
  getCards(req, res, next);
});

router.delete('/:cardId', function(req, res, next) {
  delCard(req, res, next);
});

module.exports = router;
