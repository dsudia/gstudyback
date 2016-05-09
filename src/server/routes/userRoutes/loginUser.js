var userQueries = require('../../../../queries/users.js');
var helpers = require('../../lib/helpers');
var io = require('socket.io');

module.exports = function(req, res, next) {
  userQueries.getUserByUsername(req.body.username)
    .then(function(user) {
      if (user[0] === undefined) {
        res.status(401).json({
          status: 'failed',
          message: 'Incorrect username or password'});
      } else {
        var token = helpers.generateToken(user[0]);
        res.status(200).json({
          token: token,
          user: user.username
        });
        io.sockets.emit(user[0] +  ' just logged in!')
      }
    })
    .catch(function(err) {
      return next(err);
    });
}
