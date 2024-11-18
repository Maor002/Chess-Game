const mongoose = require('mongoose');

// הגדרת הסכמה של משתמש
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['online', 'offline'],
      default: 'offline',
    },
  },
  { timestamps: true } // מוסיף שדות createdAt ו-updatedAt
);

// יצירת המודל על בסיס הסכמה
const User = mongoose.model('User', userSchema);

module.exports = User;
