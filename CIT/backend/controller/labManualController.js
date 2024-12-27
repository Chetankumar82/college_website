const LabManual = require('../models/LabManual');
const path = require('path');
const fs = require('fs');

// Upload a new lab manual
const uploadLabManual = async (req, res) => {
  try {
    const { branch } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const newLabManual = new LabManual({
      filename: file.originalname,
      branch,
      path: file.path,
    });

    await newLabManual.save();

    res.status(201).json({ message: 'Lab manual uploaded successfully', labManual: newLabManual });
  } catch (error) {
    console.error('Error uploading lab manual:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all lab manuals
const getAllLabManuals = async (req, res) => {
  try {
    const labManuals = await LabManual.find();
    res.status(200).json(labManuals);
  } catch (error) {
    console.error('Error fetching lab manuals:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a lab manual by ID
const getLabManualById = async (req, res) => {
  try {
    const labManualId = req.params.id;
    const labManual = await LabManual.findById(labManualId);

    if (!labManual) {
      return res.status(404).json({ message: 'Lab manual not found' });
    }

    res.download(`${__dirname}/../${labManual.path}`, (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        return res.status(500).json({ message: 'Error downloading file' });
      }
    });
  } catch (error) {
    console.error('Error fetching lab manual:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a lab manual by ID
const deleteLabManualById = async (req, res) => {
  try {
    const labManualId = req.params.id;
    const labManual = await LabManual.findById(labManualId);

    if (!labManual) {
      return res.status(404).json({ message: 'Lab manual not found' });
    }

    // Delete the file from the filesystem
    fs.unlink(labManual.path, (err) => {
      if (err) {
        console.error('Error deleting file from filesystem:', err);
        return res.status(500).json({ message: 'Error deleting file from filesystem' });
      }
    });

    // Delete the document from the database
    await LabManual.findByIdAndDelete(labManualId);

    res.status(200).json({ message: 'Lab manual deleted successfully' });
  } catch (error) {
    console.error('Error deleting lab manual:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  uploadLabManual,
  getAllLabManuals,
  getLabManualById,
  deleteLabManualById, // Export the delete function
};
