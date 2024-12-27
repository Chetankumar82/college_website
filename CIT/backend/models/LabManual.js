const mongoose = require('mongoose');

const labManualSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const LabManual = mongoose.model('LabManual', labManualSchema);

module.exports = LabManual;
