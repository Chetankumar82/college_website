// routes/admins.js
const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// Create a new admin
router.post('/', async (req, res) => {
  try {
    const { title, name, qualification, phone, email } = req.body;
    const newAdmin = new Admin({ title, name, qualification, phone, email });
    const savedAdmin = await newAdmin.save();
    res.status(201).json(savedAdmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
