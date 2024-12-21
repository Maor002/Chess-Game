const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

// יצירת משתמש חדש
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// קבלת כל המשתמשים (לדוגמה בלבד)
router.get('/allUsers', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
