const express = require('express');
const { createGame } = require('../controllers/gameController');

const router = express.Router();

// יצירת משחק חדש
router.post('/', createGame);

module.exports = router;
