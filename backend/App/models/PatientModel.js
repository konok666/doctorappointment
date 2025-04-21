const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  profileImage: {
    type: String, // Image URL or file path
    required: false, // Optional
  },
});

const PatientModel = mongoose.model('Patient', PatientSchema);
module.exports = PatientModel;
