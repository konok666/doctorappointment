import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Style/AddPatientPage.css";

const AddPatients = () => {
  const navigate = useNavigate(); // Initialize navigate to use for redirection

  const [patientData, setPatientData] = useState({
    name: "",
    email: "",
    age: "",
    problem: "",
    address: "",
    bookingDate: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const addPatient = async () => {
    const { name, email, age, problem, address, bookingDate } = patientData;
    if (!name || !email || !age || !problem || !address || !bookingDate) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/patients/insert", patientData);

      setMessage(response.data.message);
      setPatientData({
        name: "",
        email: "",
        age: "",
        problem: "",
        address: "",
        bookingDate: "",
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  // Function for the back button to navigate to the Dashboard
  const handleBackClick = () => {
    navigate("/admin-panel"); // Redirect to the admin dashboard
  };

  return (
    <div className="add-patients-page">
      {/* Back Button */}
      <div className="header-row">
        <button onClick={handleBackClick} className="back-button">
          Back to Dashboard
        </button>
        <h2 className="add-patient-title">Add Patient</h2>
        <div className="spacer" />
      </div>

      <div className="patients-form">
        <div className="patients-fields">
          <label>Patient Name</label>
          <input
            type="text"
            name="name"
            value={patientData.name}
            onChange={handleInputChange}
            placeholder="Enter patient name"
          />
          <label>Patient Email</label>
          <input
            type="email"
            name="email"
            value={patientData.email}
            onChange={handleInputChange}
            placeholder="Enter patient email"
          />
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={patientData.age}
            onChange={handleInputChange}
            placeholder="Enter age"
          />
          <label>Patient Problem</label>
          <input
            type="text"
            name="problem"
            value={patientData.problem}
            onChange={handleInputChange}
            placeholder="Enter problem description"
          />
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={patientData.address}
            onChange={handleInputChange}
            placeholder="Enter address"
          />
          <label>Booking Date</label>
          <input
            type="date"
            name="bookingDate"
            value={patientData.bookingDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="button-container">
          <button onClick={addPatient} className="add-patient-btn">
            Add Patient
          </button>
        </div>
        {message && <p className="response-message">{message}</p>}
      </div>
    </div>
  );
};

export default AddPatients;
