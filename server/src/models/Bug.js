const mongoose = require('mongoose');

const BugSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['open', 'in-progress', 'resolved'], default: 'open' },
}, { timestamps: true });

module.exports = mongoose.model('Bug', BugSchema); 