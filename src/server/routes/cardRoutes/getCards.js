var cardQueries = require('../../../../queries/cards');

module.exports = function(req, res, next) {
  return cardQueries.getCardsByDeckId(req.params.deckId)
  .then(function(cards) {
    res.status(200).send(cards);
  });
}
