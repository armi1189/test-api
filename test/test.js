var request = require('supertest'),
    express = require('express'),
    mongoose = require('mongoose');

process.env.NODE_ENV = 'test'
var app = require('../app');

beforeEach(function(done) {
  mongoose.connection.db.dropDatabase(done);
});

after(function(done) {
  mongoose.connection.close();
  process.exit()
  done();
})

describe('POST', function() { 
  it('responds with a json success message', function(done) {
    request(app)
    .post('/makers')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({'name': "andrea", 'pair': "true", 'blacklist': 'true'})
    .expect(200, done);
  });
});

describe('GET', function() {
  it('responds with a list of makers in JSON', function(done) {
    request(app)
    .get('/makers')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});