var deckQueries = require('../../../../queries/decks');
var cardQueries = require('../../../../queries/cards');
var io = require('socket.io');

module.exports = function(req, res, next) {
  var cards = req.body.card
  return deckQueries.addDeck(req.params.userId, req.body.name, req.body.descrip)
  .then(function(deck) {
    var deckId = deck[0];
    // io.sockets.emit("Someone just created the deck " + req.body.name);
    var promises = [];
    cards.forEach(function(el, ind, arr) {
      promises.push(cardQueries.addCard(deckId, el.question, el.answer, el.score, el.qImg, el.aImg));
    });
    return Promise.all(promises)
    .then(function(data) {
      console.log('sending response')
      res.status(200).json({message: "Deck and cards added successfully!"});
    })
    .catch(function(err) {
      console.log(err);
    });
  });
}
