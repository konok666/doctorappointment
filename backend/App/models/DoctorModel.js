const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  fees: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String, 
  
  },
});

const DoctorModel = mongoose.model('Doctor', DoctorSchema);
module.exports = DoctorModel;
