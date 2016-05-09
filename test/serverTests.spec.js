var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server/app');
var knex = require('../db/knex');

var should = chai.should();

chai.use(chaiHttp);

describe('API Routes', function() {

  describe('login user', function() {

    it('should respond with a 200 and the user on good request', function(done) {
      chai.request(server)
        .get('/users/login')
        .send({username: 'bentheliar', password: '12345678'})
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('id');
          res.body.id.should.equal(1);
          res.body.should.have.property('username');
          res.body.username.should.equal('bentheliar');
          done();
        });
    });

    it('should respond with a message when the username or password is wrong', function(done) {
      chai.request(server)
      .get('/users/login')
      .send({username: 'beentheliar', password: '12345678'})
      .end(function(err, res) {
        res.should.have.status(400);
        res.should.be.json;
        res.body.should.have.property('message');
        res.body.message.should.equal('Incorrect username or password');
        done();
      });
    });

  });

  describe('add user', function() {

    it('should add a user with passed information', function(done) {
      return chai.request(server)
        .post('/users/add')
        .send({username: 'dsudia', password: 'abc123'})
        .end(function(err, res) {
          return chai.request(server)
          .get('/users/login')
          .send({username: 'dsudia', password: 'abc123'})
          .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.have.property('username');
            res.body.username.should.equal('dsudia');
            done();
          });
        });
    });
  });

});
