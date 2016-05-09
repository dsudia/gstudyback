var userQueries = require('../../../../queries/users.js');
var helpers = require('../../lib/helpers');
var io = require('socket.io');

module.exports = function(req, res, next) {
  if (req.body.password === req.body.confPass) {
    return userQueries.addUser(req.body.username, req.body.password)
      .then(function(user) {
        var token = helpers.generateToken(user[0]);
        res.status(200).json({
          status: 'success',
          data: {
            token: token,
            user: user[0].username
          }
        })
        io.sockets.emit(user[0].username + " just joined gStudying!");
      })
      .catch(function(err) {
        return next(err);
      });
  }
}
