var cardQueries = require('../../../../queries/cards');

module.exports = function(req, res, next) {
    return cardQueries.addCard(req.body.deckId, req.body.question, req.body.answer, req.body.score, req.body.qImg, req.body.aImg)
    .then(function(card) {
      res.status(200).send(card[0]);
    });
  });
}
