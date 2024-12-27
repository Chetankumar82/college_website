// models/Notice.js

const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  size: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice;
