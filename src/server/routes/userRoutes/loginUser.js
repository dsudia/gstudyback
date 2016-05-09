var userQueries = require('../../../../queries/users.js');

module.exports = function(req, res, next) {
  userQueries.getUserByUsername(req.body.username)
    .then(function(user) {
      res.status(200).send(user);
    })
    .catch(function(err) {
      res.status(400).send({message: 'Incorrect username or password'});
    });
}
