var knex = require('../db/knex');
var users = function() {
  return knex('users');
};

module.exports = {

  getUserByUsername: function(username) {
    return knex('users').where('username', username);
  }

}
