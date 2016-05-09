var express = require('express');
var router = express.Router();
var helpers = require('../lib/helpers');
var getCards = require('./cardRoutes/getCards');

router.get('/:deckId', function(req, res, next) {
  getCards(req, res, next);
});

module.exports = router;
