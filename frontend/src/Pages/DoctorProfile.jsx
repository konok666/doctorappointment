import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Style/DoctorProfile.css";

const DoctorProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor; // Get doctor data from navigation state

  if (!doctor) {
    return <h2>Doctor not found!</h2>;
  }

  const handleBookAppointment = () => {
    navigate("/patient-form", { state: { doctor } }); // Navigate to PatientForm with doctor data
  };

  return (
    <div className="doctor-profile">
      <h2>{doctor.specialization}</h2>
      <img src={doctor.imgSrc} alt={doctor.name} className="doctor-profile-img" />
      <h3>{doctor.name}</h3>
      <p><strong>Status:</strong> {doctor.status}</p>

      <div className="profile-actions">
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={handleBookAppointment}>Book Appointment</button>
      </div>
    </div>
  );
};

export default DoctorProfile;
