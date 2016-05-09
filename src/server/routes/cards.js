var express = require('express');
var router = express.Router();
var helpers = require('../lib/helpers');
var getCards = require('./cardRoutes/getCards');
var delCard = require('./cardRoutes/deleteCard');
var addCard = require('./cardRoutes/addCard');
var updateCard = require('./cardRoutes/updateCard');

router.get('/:deckId', function(req, res, next) {
  getCards(req, res, next);
});

router.post('/add', function(req, res, next) {
  addCard(req, res, next);
});

router.put('/success/:cardId', function(req, res, next) {
  updateCard.success(req, res, next);
});

router.put('/fail/:cardId', function(req, res, next) {
  updateCard.failed(req, res, next);
});

router.delete('/delete/:cardId', function(req, res, next) {
  delCard(req, res, next);
});

module.exports = router;
