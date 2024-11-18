const Game = require('../models/gameModel');

// יצירת משחק חדש
const createGame = async (req, res) => {
  try {
    const { white, black } = req.body;
    const game = new Game({
      players: { white, black },
      boardState: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
      moves: [],
    });
    await game.save();
    res.status(201).json(game);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createGame };
