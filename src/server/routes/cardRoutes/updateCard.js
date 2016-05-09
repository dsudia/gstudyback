var cardQueries = require('../../../../queries/cards');

module.exports = {

  success: function(req, res, next) {
    return cardQueries.changeScore(req.body.deckId, 1)
    .then(function(card) {
      res.status(200).send(card[0]);
    });
  },

  failed: function(req, res, next) {
    return cardQueries.changeScore(req.body.deckId, 0)
    .then(function(card) {
      res.status(200).send(card[0]);
    });
  },
}
