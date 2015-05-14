var mongoose = require('mongoose');

var SubItemSchema = new mongoose.Schema({
  name: String,
  status: Boolean,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SubItem', SubItemSchema);
