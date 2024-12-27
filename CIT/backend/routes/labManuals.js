const express = require('express');
const labRouter = express.Router();
const multer = require('multer');

const labManualController = require('../controller/labManualController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Destination directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Naming file with timestamp to avoid duplicates
    }
  });
  
  const upload = multer({ storage: storage });

// Upload a new lab manual
labRouter.post('/labManual', upload.single('file') ,labManualController.uploadLabManual);

// Get all lab manuals
labRouter.get('/labManual', labManualController.getAllLabManuals);

// Get a lab manual by ID
labRouter.get('/labManual/:id', labManualController.getLabManualById);
labRouter.delete('/labManual/:id', labManualController.deleteLabManualById);

module.exports = labRouter;
