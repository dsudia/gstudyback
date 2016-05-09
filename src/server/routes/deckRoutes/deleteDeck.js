var deckQueries = require('../../../../queries/decks');

module.exports = function(req, res, next) {
  return deckQueries.deleteDeck(req.params.deckId)
  .then(function(deck) {
    res.status(200).send(deck[0]);
  });
}
