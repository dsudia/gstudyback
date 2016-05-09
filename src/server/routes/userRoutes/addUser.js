var userQueries = require('../../../../queries/users.js');

module.exports = function(req, res, next) {
  userQueries.addUser(req.body.username, req.body.password)
    .then(function(user) {
      res.status(200).send(user);
    })
    .catch(function(err) {
      res.status(400).send({message: 'There was a problem creating the user.'});
    });
}
