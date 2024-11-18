const express = require('express');
const gameRoutes = require('./routes/gameRoutes');

const app = express();

app.use(express.json());

// רישום מסלולים (Routes)
app.use('/api/game', gameRoutes);

module.exports = app;

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

