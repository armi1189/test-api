var request = require('supertest'),
    express = require('express');
    mongoose = require('mongoose');

process.env.NODE_ENV = 'test'
var app = require('../app.js');

beforeEach(function(done) {
  mongoose.connection.db.dropDatabase(done);
});

after(function(done) {
  mongoose.connection.close();
  process.exit()
  done();
})

describe('POST', function(){
  it('responds with a json success message', function(done){
    request(app)
    .post('/items')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({'name': 'first_item', 'status': 'false'})
    .expect(200, done);
  });
});

describe('GET', function(){
  it('responds with a list of todo items in JSON', function(done){
    request(app)
    .get('/items')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});