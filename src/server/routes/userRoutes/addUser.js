var userQueries = require('../../../../queries/users.js');
var io = require('socket.io');

module.exports = function(req, res, next) {
  userQueries.addUser(req.body.username, req.body.password)
    .then(function(user) {
      res.status(200).send(user[0]);
      io.sockets.emit(user[0].username + "just joined!");
    })
    .catch(function(err) {
      res.status(400).send({message: 'There was a problem creating the user.'});
    });
}
