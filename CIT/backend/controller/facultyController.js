// controllers/facultyController.js
const path = require('path');
const fs = require('fs');
const Faculty = require('../models/Faculty');
const multer = require('multer');


// Create a new faculty member
exports.createFaculty = async (req, res) => {
  try {
    const newFaculty = await Faculty.create(req.body);
    res.status(201).json(newFaculty);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an existing faculty member
exports.updateFaculty = async (req, res) => {
  try {
    const updatedFaculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedFaculty);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.deleteFaculty = async (req, res) => {
  try {
    // Find the faculty by ID
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }

    // Resolve the full path of the image file
    if(faculty.image !== ''){
    const filePath = path.resolve(faculty.image); // Assuming 'imageUrl' is the field storing the image path

    // Delete image file if it exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
    // Delete the faculty document
    await Faculty.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Faculty deleted successfully' });
  } catch (err) {
    console.error('Error deleting faculty:', err);
    res.status(400).json({ error: err.message });
  }
};


exports.getAllFaculty = async (req, res) => {
    try {
      const faculties = await Faculty.find();
      res.json(faculties);
    } catch (err) {
      console.error('Error fetching faculties:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };



// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the directory where you want to store the images
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique filename for the uploaded image
  },
});

const upload = multer({ storage });

exports.updateFacultyImage = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }

    // Handle file upload with multer
    upload.single('image')(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: 'Multer error', error: err });
      } else if (err) {
        return res.status(500).json({ message: 'Unknown error occurred', error: err });
      }

      // File upload successful, update faculty document
      if (req.file) {
        const filePath = path.join('uploads', req.file.filename);
        faculty.image = filePath; // Store the relative path

        await faculty.save();

        res.json({ imageUrl: filePath });
      } else {
        res.status(400).json({ message: 'No file uploaded' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};
