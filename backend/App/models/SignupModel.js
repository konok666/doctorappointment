const mongoose = require('mongoose');

// Define Signup Schema
const SignupSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  Password: {
    type: String,
    required: true,
  },
});

// Create Signup Model
const SignupModel = mongoose.model('Signup', SignupSchema);
module.exports = SignupModel;
