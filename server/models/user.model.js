const mongoose = require('mongoose');

const SignupSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetToken: String,
    resetTokenExpiration: Date,
  },
  {
    collection: "Users",
  }
);

module.exports = mongoose.model('Users', SignupSchema);
