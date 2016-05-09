var deckQueries = require('../../../../queries/decks');

module.exports = function(req, res, next) {
  return deckQueries.getDecksByUserId(req.params.userId)
  .then(function(decks) {
    res.status(200).send(decks);
  });
}
