// routes/studentRoutes.js
const express = require('express');
const studentRouter = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const studentController = require('../controller/studentController');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Naming file with timestamp to avoid duplicates
  }
});

const upload = multer({ storage: storage });



studentRouter.post('/students', studentController.createStudent);
studentRouter.get('/students', studentController.getStudents);
studentRouter.get('/students/:id', studentController.getStudentById);
studentRouter.put('/students/:id', studentController.updateStudent);
studentRouter.put('/students/:id/fileUpload',upload.single('file'), studentController.uploadFile);
studentRouter.get('/students/:id/getFiles', studentController.getFiles);


studentRouter.delete('/students/:id', studentController.deleteStudent);

module.exports = studentRouter;
