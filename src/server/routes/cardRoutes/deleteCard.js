var cardQueries = require('../../../../queries/cards');

module.exports = function(req, res, next) {
  return cardQueries.deleteCard(req.params.cardId)
  .then(function(card) {
    res.status(200).send(card[0]);
  });
}
