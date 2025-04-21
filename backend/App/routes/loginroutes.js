const express = require('express');
const router = express.Router();
const { LoginInsert, LoginView, LoginDelete, LoginUpdate } = require('../controllers/LoginController');

// POST: Insert a login
router.post('/insert', LoginInsert);

// GET: View a login by ID
router.get('/view/:id', LoginView);

// DELETE: Delete a login by ID
router.delete('/delete/:id', LoginDelete);

// PUT: Update a login by ID
router.put('/update/:id', LoginUpdate);

module.exports = router;
