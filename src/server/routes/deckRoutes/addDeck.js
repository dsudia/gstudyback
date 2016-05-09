var deckQueries = require('../../../../queries/decks');
var cardQueries = require('../../../../queries/cards');

module.exports = function(req, res, next) {
  var cards = req.body.cards
  return deckQueries.addDeck(req.params.userId, req.body.name, req.body.descrip)
  .then(function(deck) {
    var deckId = deck[0].id;
    return cards.forEach(function(el, ind, arr) {
      return cardQueries.addCard(deckId, el.question, el.answer, el.score, el.qImg, el.aImg);
    })
    .then(function(data) {
      res.status(200).send({message: "Deck and cards added successfully!"});
    });
  });
}
