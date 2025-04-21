const express = require('express');
const router = express.Router();
const { AppointmentInsert, AppointmentView, AppointmentDelete, AppointmentUpdate, AppointmentList } = require('../controllers/AppointmentController');

// Create a new appointment
router.post('/insert', AppointmentInsert);

// Get a specific appointment by ID
router.get('/view/:id', AppointmentView); // fixed: added :id

// Get all appointments
router.get('/list', AppointmentList); // ✅ this is new

// Delete an appointment by ID
router.delete('/delete/:id', AppointmentDelete);

// Update an appointment by ID
router.put('/update/:id', AppointmentUpdate);

module.exports = router;
