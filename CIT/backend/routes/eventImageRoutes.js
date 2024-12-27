// routes/eventImageRoutes.js

const express = require('express');
const eventImageRouter = express.Router();
const multer = require('multer');
const eventImageController = require('../controller/eventController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Destination directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Naming file with timestamp to avoid duplicates
    }
  });
  

const upload = multer({ storage });

// POST endpoint to upload event image
eventImageRouter.post('/upload', upload.single('image'), eventImageController.uploadEventImage);

// GET endpoint to fetch all event images
eventImageRouter.get('/', eventImageController.getAllEventImages);

// DELETE endpoint to delete event image by ID
eventImageRouter.delete('/:id', eventImageController.deleteEventImage);

module.exports = eventImageRouter;
