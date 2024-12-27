// models/Student.js
const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true },
  batchYear: { type: Number, required: true },
  enrollmentNo: { type: String, required: true },
  currentYear: { type: Number, required: true },
  fileUpload: [{
    filename: { type: String  },
    path: { type: String},
    size: { type: Number }
  }], // Array of file paths
});

module.exports = mongoose.model('Student', studentSchema);
