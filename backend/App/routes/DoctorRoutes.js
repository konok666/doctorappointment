const express = require('express');
const router = express.Router();
const { addDoctor, getDoctorById, deleteDoctorById, updateDoctorById } = require('../controllers/DoctorController');

// Add Doctor route
router.post('/insert', addDoctor); // Adding a doctor

// View Doctor by ID
router.get('/view', getDoctorById); // Fetching doctor details by ID

// Delete Doctor by ID
router.delete('/delete/:id', deleteDoctorById); // Deleting a doctor by ID

// Update Doctor by ID
router.put('/update/:id', updateDoctorById);    // Updating doctor details by ID

module.exports = router;
