var userQueries = require('../../../../queries/users.js');
var helpers = require('../../lib/helpers');
var io = require('socket.io');

module.exports = function(req, res, next) {
  userQueries.getUserByUsername(req.body.username)
    .then(function(user) {
      var userData = JSON.stringify(user[0]);
      userData = JSON.parse(userData)
      if (userData === undefined) {
        res.json({
          status: 'failed',
          message: 'Incorrect username or password'});
      } else {
        if (userData.password === req.body.password) {
          var token = helpers.generateToken(userData);
          res.json({
            token: token,
            user: userData.username
          });
          // io.sockets.emit(userData +  ' just logged in!')
        } else {
          res.json({
            status: 'failed',
            message: 'Incorrect username or password'
          });
        }
      }
    })
    .catch(function(err) {
      return next(err);
    });
}
