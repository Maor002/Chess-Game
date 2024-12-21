const express = require('express');
const router = express.Router();
const Game = require('../models/gameModel');

// בקשה להחזרת כל המשחקים
router.get('/allGames', async (req, res) => {
  try {
    const games = await Game.find(); // שליפת כל המשחקים
    res.status(200).json(games); // החזרת המשחקים ב-JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// בקשה ליצירת משחק חדש
router.post('/createGame', async (req, res) => {
  try {
    const { white, black } = req.body;
    if (!white || !black) {
      return res.status(400).json({ message: 'Both white and black players must be provided' });
    }
    const game = new Game({
      players: { white, black },
      boardState: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
      moves: [],
    });
    await game.save();
    res.status(201).json(game); // החזרת המשחק שנוצר ב-JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;