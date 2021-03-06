var knex = require('../db/knex');
var decks = function() {
  return knex('decks');
};

module.exports = {

  getDecksByUserId: function(userId) {
    decks().where('user_id', userId);
  },

  addDeck: function(userId, name, descrip) {
    return decks().insert({user_id: userId,
                    name: name,
                    descrip: descrip})
                    .returning('id');
  },

  getDeck: function(deckId) {
    decks().where('id', deckId);
  },

  deleteDeck: function(deckId) {
    decks().where('id', deckId).del();
  }

}
