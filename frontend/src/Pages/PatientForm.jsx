import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import "../Style/PatientForm.css";

const PatientForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor;
  const form = useRef();

  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    phone: '',
    date: '',
    time: '',
    problem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!doctor) {
    return <h2>Error: No doctor information found</h2>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendConfirmationEmail = async () => {
    try {
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

      const templateParams = {
        to_name: formData.patientName,
        to_email: formData.patientEmail,
        doctor_name: doctor.name,
        appointment_date: formData.date,
        appointment_time: formData.time,
        doctor_specialization: doctor.specialization,
        problem: formData.problem,
        phone: formData.phone
      };

      const result = await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams
      );

      console.log('Email sent successfully:', result.text);
      return result;
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send confirmation email
      await sendConfirmationEmail();

      // Show success message
      alert('Appointment booked successfully! A confirmation email has been sent.');
      
      // Navigate back to doctors list
      navigate('/all-doctors');
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error booking your appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="patient-form-container">
      <h2>Book Appointment with {doctor.name}</h2>
      <div className="doctor-info">
        <img src={doctor.imgSrc} alt={doctor.name} className="doctor-thumbnail" />
        <div>
          <h3>{doctor.specialization}</h3>
          <p>Status: {doctor.status}</p>
        </div>
      </div>

      <form ref={form} onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="patientName">Full Name:</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="patientEmail">Email:</label>
          <input
            type="email"
            id="patientEmail"
            name="patientEmail"
            value={formData.patientEmail}
            onChange={handleInputChange}
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
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Preferred Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Preferred Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="problem">Health Problem:</label>
          <textarea
            id="problem"
            name="problem"
            value={formData.problem}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="button" onClick={() => navigate(-1)} className="back-button">
            Back
          </button>
          <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
