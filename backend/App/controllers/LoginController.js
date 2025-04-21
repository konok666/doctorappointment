const LoginModel = require('../models/LoginModel');

// Insert: Add a new login
const LoginInsert = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // Validate required fields
    if (!Email || !Password) {
      return res.status(400).json({
        message: 'Email and Password are required',
      });
    }

    const login = new LoginModel({ Email, Password });
    await login.save();

    res.status(201).json({
      message: 'Login inserted successfully',
      data: login,
    });
  } catch (error) {
    console.error('Error inserting login:', error.message);
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

// View: Get a specific login by ID
const LoginView = async (req, res) => {
  try {
    const { id } = req.params;
    const login = await LoginModel.findById(id);

    if (!login) {
      return res.status(404).json({
        message: 'Login not found',
      });
    }

    res.status(200).json({
      message: 'Login found successfully',
      data: login,
    });
  } catch (error) {
    console.error('Error viewing login:', error.message);
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

// Delete: Remove a login by ID
const LoginDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const login = await LoginModel.findByIdAndDelete(id);

    if (!login) {
      return res.status(404).json({
        message: 'Login not found',
      });
    }

    res.status(200).json({
      message: 'Login deleted successfully',
      data: login,
    });
  } catch (error) {
    console.error('Error deleting login:', error.message);
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

// Update: Modify a login by ID
const LoginUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const login = await LoginModel.findByIdAndUpdate(id, updatedData, { new: true });

    if (!login) {
      return res.status(404).json({
        message: 'Login not found',
      });
    }

    res.status(200).json({
      message: 'Login updated successfully',
      data: login,
    });
  } catch (error) {
    console.error('Error updating login:', error.message);
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

module.exports = { LoginInsert, LoginView, LoginDelete, LoginUpdate };
