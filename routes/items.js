var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Item = require('../models/Item.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Item.find(function (err, items) {
    if (err) return next(err);
    res.json(items);
  }); 
});

router.post('/', function(req, res, next) {
  Item.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



module.exports = router;
