import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/PatientForm.css";

const PatientForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor;

  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
    medicalIssue: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!doctor) {
    return <h2 className="error-message">Error: Doctor information not found</h2>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        doctorId: doctor.id,
      };

      const response = await axios.post(
        "http://localhost:5000/api/appointment/insert",
        payload
      );

      alert(response.data.message);
      navigate("/all-doctors");
    } catch (error) {
      console.error("Error booking appointment:", error.response?.data || error.message);
      alert(
        error.response?.data?.message ||
          "Failed to book the appointment. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="patient-form-container">
      <h2>Book Appointment with {doctor.name}</h2>
      <div className="doctor-info">
        <img
          src={doctor.imgSrc}
          alt={`${doctor.name}'s photo`}
          className="doctor-thumbnail"
        />
        <div className="doctor-details">
          <h3>{doctor.specialization}</h3>
          <p>Status: {doctor.status}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="patientName">Full Name:</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="appointmentDate">Preferred Date:</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="appointmentTime">Preferred Time:</label>
          <input
            type="time"
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="medicalIssue">Health Problem:</label>
          <textarea
            id="medicalIssue"
            name="medicalIssue"
            value={formData.medicalIssue}
            onChange={handleInputChange}
            placeholder="Describe your health problem"
            required
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="back-button"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? "Submitting..." : "Confirm Booking"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
