// controllers/eventImageController.js

const EventImage = require('../models/EventImages');
const path = require('path');
const fs = require('fs');

// Upload event image
exports.uploadEventImage = async (req, res) => {
  try {
    const { category } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const imageUrl = req.file.path; // Assuming multer stores file path in req.file.path

    const newEventImage = new EventImage({
      category,
      imageUrl,
    });

    await newEventImage.save();

    res.status(201).json({ message: 'Event image uploaded successfully', imageUrl });
  } catch (error) {
    console.error('Error uploading event image:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Fetch all event images
exports.getAllEventImages = async (req, res) => {
  try {
    const eventImages = await EventImage.find();
    res.json(eventImages);
  } catch (error) {
    console.error('Error fetching event images:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};


exports.deleteEventImage = async (req, res) => {
  try {
    const eventImage = await EventImage.findById(req.params.id);

    if (!eventImage) {
      return res.status(404).json({ message: 'Event image not found' });
    }

    const filePath = path.resolve(eventImage.imageUrl);

    // Delete image file if it exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await EventImage.deleteOne({ _id: req.params.id });

    res.json({ message: 'Event image deleted successfully' });
  } catch (error) {
    console.error('Error deleting event image:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
