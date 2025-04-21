const PatientModel = require('../models/PatientModel');

// Add Patient
const addPatient = async (req, res) => {
  try {
    const { name, email, age, problem, address, bookingDate, profileImage } = req.body;

    const newPatient = new PatientModel({
      name,
      email,
      age,
      problem,
      address,
      bookingDate,
      profileImage,
    });

    await newPatient.save();

    res.status(201).json({
      message: "Patient added successfully",
      data: newPatient,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding patient",
      error: error.message,
    });
  }
};

// Get all patients
// Get all patients
const patientView = async (req, res) => {
  try {
    const patients = await PatientModel.find();

    if (!patients || patients.length === 0) {
      return res.status(404).json({ message: "No patients found." });
    }

    res.status(200).json({ patients });
  } catch (error) {
    console.error("Error fetching patients:", error.message);
    res.status(500).json({ error: "Server error while fetching patients." });
  }
};




// Get a specific patient by ID
const getPatientById = async (req, res) => {
  try {
    const patient = await PatientModel.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }
    res.status(200).json({
      data: patient,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching patient",
      error: error.message,
    });
  }
};

// Update a specific patient by ID
const updatePatientById = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedPatient = await PatientModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedPatient) {
      return res.status(404).json({ message: "Patient not found." });
    }
    res.status(200).json({ message: "Patient updated", updatedPatient });
  } catch (error) {
    res.status(500).json({ message: "Error updating patient.", error: error.message });
  }
};


// Delete a specific patient by ID
const deletePatientById = async (req, res) => {
  try {
    const deletedPatient = await PatientModel.findByIdAndDelete(req.params.id);
    if (!deletedPatient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }
    res.status(200).json({
      message: "Patient deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting patient",
      error: error.message,
    });
  }
};

module.exports = {
  addPatient,
  patientView,
  getPatientById,
  updatePatientById,
  deletePatientById,
};
