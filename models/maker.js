var mongoose = require('mongoose');
var MakerSchema = new mongoose.Schema({
  name: String,
  pair: Boolean,
  blacklist: Boolean,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Maker', MakerSchema);