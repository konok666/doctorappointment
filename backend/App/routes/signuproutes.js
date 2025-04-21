const express = require('express');
const router = express.Router();
const { SignupInsert, SignupView, SignupDelete, SignupUpdate } = require('../controllers/SignupController');

// Define routes for Signup operations
router.post('/insert', SignupInsert);
router.get('/view/:id', SignupView);
router.delete('/delete/:id', SignupDelete);
router.put('/update/:id', SignupUpdate);

module.exports = router;
