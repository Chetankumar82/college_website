const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Dummy login endpoint
router.post('/login', async (req, res) => {
    const { name, password } = req.body;

  try {
    // Find the user by name and password
    const user = await User.findOne({ name, password });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    res.status(200).json({ msg: 'Login successful', user });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});




module.exports = router;
