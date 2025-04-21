const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true, // Ensures the field is mandatory
  },
  email: {
    type: String,
    required: true, // Ensures the field is mandatory
  },
  phone: {
    type: String,
    required: true, // Ensures the field is mandatory
  },
  appointmentDate: {
    type: String,
    required: true, // Renamed to be more descriptive
  },
  appointmentTime: {
    type: String,
    required: true, // Renamed to be more descriptive
  },
  medicalIssue: {
    type: String,
    required: true, // Renamed to be more descriptive
  },
});

const AppointmentModel = mongoose.model('Appointment', AppointmentSchema);
module.exports = AppointmentModel;
