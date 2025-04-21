const express = require('express');
const router = express.Router();
const { AppointmentInsert, AppointmentView, AppointmentDelete, AppointmentUpdate } = require('../controllers/AppointmentController');

// Create a new appointment
router.post('/insert', AppointmentInsert);

// Get a specific appointment by ID
router.get('/view', AppointmentView);

// Delete an appointment by ID
router.delete('/delete/:id', AppointmentDelete);

// Update an appointment by ID
router.put('/update/:id', AppointmentUpdate);

module.exports = router;
