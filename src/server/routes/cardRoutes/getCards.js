var cardQueries = require('../../../../queries/cards');
var deckQueries = require('../../../../queries/decks');

module.exports = function(req, res, next) {
  return cardQueries.getCardsByDeckId(req.params.deckId)
  .then(function(cards) {

    return deckQueries.getDeck(req.params.deckId)
    .then(function(deck) {
      io.sockets.emit('Someone is studying ' + deck[0].name)
      res.status(200).send(cards);
    })

  });
}
