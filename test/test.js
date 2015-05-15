var request = require('supertest'),
    should = require('chai').should(),
    expect = require('chai').expect,
    express = require('express'),
    mongoose = require('mongoose');

process.env.NODE_ENV = 'test'
var app = require('../app');

afterEach(function(done) {
  mongoose.connection.db.dropDatabase();
  done();
});

after(function(done) {
  mongoose.connection.close();
  process.exit()
  done();
});

describe('POST', function() { 
  it('responds with a json success message', function(done) {
    request(app)
    .post('/makers')
    .set('Accept', 'application/x-www-form-urlencoded')
    .expect('Content-Type', /json/)
    .send({'name': "andrea", 'pair': "true", 'blacklist': 'true'})
    .expect(200, done);
  });
});

describe('GET', function() {

  before(function(done) {
    request(app)
    .post('/makers')
    .set('Accept', 'application/x-www-form-urlencoded')
    .send({'name': "gian", 'pair': "true", 'blacklist': 'true'})
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err,res) {
      done();
    });
  });

  it('responds with a list of makers in JSON', function(done) {
    request(app)
    .get('/makers')
    .set('Accept', 'application/x-www-form-urlencoded')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res) {
      console.log(res.body[0].name);
      expect(res.body[0].name).to.equal("gian");
      done();
    });
  });
});

describe('DELETE', function() {

  before(function(done) {
    request(app)
    .post('/makers')
    .set('Accept', 'application/x-www-form-urlencoded')
    .send({'name': "gian", 'pair': "true", 'blacklist': 'true'})
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err,res) {
      maker = res.body
      done();
    });
  });

  it('responds with a json success message', function(done) {
    request(app)
    .del('/makers/' + maker._id)
    .expect(200, done)
  });
});