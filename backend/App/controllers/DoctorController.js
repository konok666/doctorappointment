const DoctorModel = require('../models/DoctorModel');



// Add Doctor
const addDoctor = async (req, res) => {
  try {
    const { name, email, password, experience, address, specialty, education, fees } = req.body;

    // Validate required fields
    if (!name || !email || !password || !experience || !address || !specialty || !education || !fees) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if doctor already exists
    const existingDoctor = await DoctorModel.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: "Doctor with this email already exists" });
    }

    const profileImage = req.file ? req.file.path : null;

    const newDoctor = new DoctorModel({
      name,
      email,
      password,
      experience,
      address,
      specialty,
      education,
      fees,
      profileImage,
    });

    await newDoctor.save();

    res.status(201).json({ message: "Doctor added successfully", data: newDoctor });
  } catch (error) {
    console.error("Error adding doctor:", error.message);
    res.status(500).json({ message: "Error adding doctor", error: error.message });
  }
};
  



// Get Doctor by ID
const getDoctorById = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const doctor = await DoctorModel.findById(doctorId);
    
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({
      message: 'Doctor found',
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving doctor',
      error: error.message,
    });
  }
};

// Delete Doctor by ID
const deleteDoctorById = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const doctor = await DoctorModel.findByIdAndDelete(doctorId);
    
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({
      message: 'Doctor deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting doctor',
      error: error.message,
    });
  }
};

// Update Doctor by ID
const updateDoctorById = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const updateData = req.body;

    const updatedDoctor = await DoctorModel.findByIdAndUpdate(doctorId, updateData, { new: true });

    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({
      message: 'Doctor updated successfully',
      data: updatedDoctor,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating doctor',
      error: error.message,
    });
  }
};

module.exports = { addDoctor, getDoctorById, deleteDoctorById, updateDoctorById };
