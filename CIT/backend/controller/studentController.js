// controllers/studentController.js
const Student = require('../models/Student');

exports.createStudent = async (req, res) => {
    try {
        console.log(req.body); // Log the request body for debugging
    
        const studentData = { ...req.body, fileUpload: [] }; // Set fileUpload to an empty array
        const student = new Student(studentData);
    
        await student.save();
        res.status(201).json(student);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.uploadFile = async (req, res) => {
    try {
      const studentId = req.params.id;
      const file = req.file;
      if (!file) {
        return res.status(400).send('No file uploaded.');
      }
  
      const student = await Student.findById(studentId);

      if (!student) {
        return res.status(404).send('Student not found.');
      }
  
      const fileInfo = {
        filename: file.originalname,
        path: file.path,
        size : file.size
      };
  
      student.fileUpload.push(fileInfo);
      await student.save();
  
      res.status(200).json(student);
    } catch (error) {
      res.status(500).send('Server error');
    }
};

exports.getFiles = async (req, res) => {
  try {
    const studentId = req.params.id;

    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).send('Student not found.');
    }

    // Extract fileUpload array from student document
    const files = student.fileUpload;

    res.status(200).json(files);
  } catch (error) {
    console.error('Error retrieving files:', error);
    res.status(500).send('Server error');
  }

};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.status(200).send({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
};
