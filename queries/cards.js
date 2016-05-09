var knex = require('../db/knex');
var cards = function() {
  return knex('cards');
};

module.exports = {

  getCardsByDeckId: function(deckId) {
    cards().where('deck_id', deckId);
  },

  addCard: function(deckId, question, answer, score, qImg, aImg) {
    cards().insert({
      deck_id: deckId,
      question: question,
      answer: answer,
      score: score,
      q_img: qImg,
      a_img: aImg
    });
  },

  deleteCard: function(cardId) {
    cards().where('id', cardId).del();
  }

}
