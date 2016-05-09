var knex = require('../db/knex');
var users = function() {
  return knex('users');
};

module.exports = {

  getUserByUsername: function(username) {
    return users().where('username', username);
  },

  addUser: function(username, password) {
    return users().insert({
      username: username,
      password: password
    })
    .returning('username');
  }

}
