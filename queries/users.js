var knex = require('../db/knex');
var users = function() {
  return knex('users');
};

module.exports = {

  getUserByUsername: function(username) {
    return knex('users').where('username', username);
  },

  addUser: function(username, password) {
    return knex('users').insert({
      username: username,
      password: password
    });
  }

}
