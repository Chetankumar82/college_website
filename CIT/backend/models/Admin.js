// models/Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  qualification: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model('Admin', adminSchema);
