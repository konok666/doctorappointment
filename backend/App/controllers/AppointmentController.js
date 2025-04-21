const AppointmentModel = require('../models/AppointmentModel');

// Insert: Create a new appointment
const AppointmentInsert = async (req, res) => {
  try {
    const data = req.body;
    const appointment = new AppointmentModel(data);
    await appointment.save();

    res.status(200).json({
      message: "Appointment booked successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// View: Get a specific appointment by ID
const AppointmentView = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await AppointmentModel.findById(id);

    if (!appointment) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      message: "Appointment found successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// List: Get all appointments
const AppointmentList = async (req, res) => {
  try {
    const appointments = await AppointmentModel.find();
    res.status(200).json({
      message: "Appointments retrieved successfully",
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Delete: Remove an appointment by ID
const AppointmentDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await AppointmentModel.findByIdAndDelete(id);

    if (!appointment) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      message: "Appointment deleted successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Update: Modify an appointment by ID
const AppointmentUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const appointment = await AppointmentModel.findByIdAndUpdate(id, updatedData, { new: true });

    if (!appointment) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      message: "Appointment updated successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { AppointmentInsert, AppointmentView, AppointmentDelete, AppointmentUpdate,AppointmentList };
