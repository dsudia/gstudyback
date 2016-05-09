var moment = require('moment');
var jwt = require('jwt-simple');
var bcrypt = require('bcrypt');

function hash(password) {
  return new Promise(function (resolve, reject) {
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
}

function checkPassword(password, hashed) {
  return new Promise(function (resolve, reject) {
    bcrypt.compare(password, hashed, function (error, result) {
      if (error) {
        reject('Passwords do not match');
      } else {
        resolve(result);
      }
    });
  });
}

function generateToken(user) {
  var payload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix(),
    sub: user.id
  };
  return jwt.encode(payload, process.env.TOKEN_SECRET);
}

module.exports = {
  generateToken: generateToken,
  hash: hash,
  checkPassword: checkPassword
};
