const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  players: {
    white: { type: String, required: true },
    black: { type: String, required: true },
  },
  boardState: { type: String, required: true },
  moves: [String],
  status: { type: String, default: 'in_progress' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Game', gameSchema);
