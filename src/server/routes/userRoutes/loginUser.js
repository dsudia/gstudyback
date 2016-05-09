var userQueries = require('../../../../queries/users.js');
var io = require('socket.io');

module.exports = function(req, res, next) {
  userQueries.getUserByUsername(req.body.username)
    .then(function(user) {
      console.log(user[0]);
      if (user[0] === undefined) {
        res.status(400).send({message: 'Incorrect username or password'});
      } else {
        res.status(200).send(user[0]);
        io.sockets.emit(user[0] +  ' just logged in!')
      }
    });
}
