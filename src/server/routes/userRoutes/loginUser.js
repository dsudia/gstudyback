var userQueries = require('../../../../queries/users.js');

module.exports = function(req, res, next) {
  userQueries.getUserByUsername(req.body.username)
    .then(function(user) {
      console.log(user[0]);
      if (user[0] === undefined) {
        res.status(400).send({message: 'Incorrect username or password'});
      } else {
        res.status(200).send(user[0]);
      }
    });
}
