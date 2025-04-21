const express = require('express');
const router = express.Router();
const {
    addPatient,
    patientView, // change this
    updatePatientById,
    deletePatientById,
  } = require('../controllers/PatientController');
  

// Add a new patient
router.post('/insert', addPatient);

// Get all patients
router.get('/view', patientView);

// Update a specific patient by ID
router.put("/update/:id", updatePatientById);

// Delete a specific patient by ID
router.delete('/delete/:id', deletePatientById);

module.exports = router;
