// routes/facultyRoutes.js

const express = require('express');
const facultyRouter = express.Router();
const facultyController = require('../controller/facultyController');

// Create a new faculty member
facultyRouter.post('/faculties', facultyController.createFaculty);

// Update an existing faculty member
facultyRouter.put('/faculties/:id', facultyController.updateFaculty);

// Delete a faculty member
facultyRouter.delete('/faculties/:id', facultyController.deleteFaculty);


facultyRouter.get('/faculties', facultyController.getAllFaculty);
facultyRouter.put('/faculties/:id/image', facultyController.updateFacultyImage);


module.exports = facultyRouter;
