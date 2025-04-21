const SignupModel = require('../models/SignupModel');

// Insert: Add a new signup
const SignupInsert = async (req, res) => {
  try {
    const data = req.body;
    const signup = new SignupModel(data);
    await signup.save();

    res.status(200).json({
      message: 'Signup inserted successfully',
      data: signup,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

// View: Get a specific signup by ID
const SignupView = async (req, res) => {
  try {
    const { id } = req.params;
    const signup = await SignupModel.findById(id);

    if (!signup) {
      return res.status(404).json({
        message: 'Signup not found',
      });
    }

    res.status(200).json({
      message: 'Signup found successfully',
      data: signup,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

// Delete: Remove a signup by ID
const SignupDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const signup = await SignupModel.findByIdAndDelete(id);

    if (!signup) {
      return res.status(404).json({
        message: 'Signup not found',
      });
    }

    res.status(200).json({
      message: 'Signup deleted successfully',
      data: signup,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

// Update: Modify a signup by ID
const SignupUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const signup = await SignupModel.findByIdAndUpdate(id, updatedData, { new: true });

    if (!signup) {
      return res.status(404).json({
        message: 'Signup not found',
      });
    }

    res.status(200).json({
      message: 'Signup updated successfully',
      data: signup,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

module.exports = { SignupInsert, SignupView, SignupDelete, SignupUpdate };
