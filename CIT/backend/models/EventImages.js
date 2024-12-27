// models/Image.js

const mongoose = require('mongoose');

const EventImageSchema = new mongoose.Schema({
  category: String,
  imageUrl: String,
});

module.exports = mongoose.model('EventImage', EventImageSchema);
