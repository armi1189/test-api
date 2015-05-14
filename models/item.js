var mongoose = require('mongoose');
    // SubItemSchema = require('subitem.js')

var ItemSchema = new mongoose.Schema({
  name: String,
  status: Boolean,
  // subitems: [SubItemSchema],
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', ItemSchema);
