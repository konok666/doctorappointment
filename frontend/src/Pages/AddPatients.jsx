import React, { useState } from "react";
import axios from "axios";
import "../Style/AddPatientPage.css";

const AddPatients = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    email: "",
    age: "",
    problem: "",
    address: "",
    bookingDate: "",
  });

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

      alert(response.data.message);
      setPatientData({
        name: "",
        email: "",
        age: "",
        problem: "",
        address: "",
        bookingDate: "",
      });
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("Failed to add patient. Please try again.");
    }
  };

  return (
    <div className="add-patients-page">
      <h2>Add Patients</h2>
      <div className="patients-form">
        <div className="patients-fields">
          <label>Patient Name</label>
          <input type="text" name="name" value={patientData.name} onChange={handleInputChange} />
          <label>Patient Email</label>
          <input type="email" name="email" value={patientData.email} onChange={handleInputChange} />
          <label>Age</label>
          <input type="number" name="age" value={patientData.age} onChange={handleInputChange} />
          <label>Patient Problem</label>
          <input type="text" name="problem" value={patientData.problem} onChange={handleInputChange} />
          <label>Address</label>
          <input type="text" name="address" value={patientData.address} onChange={handleInputChange} />
          <label>Booking Date</label>
          <input type="date" name="bookingDate" value={patientData.bookingDate} onChange={handleInputChange} />
          <button onClick={addPatient} className="add-patient-btn">Add Patient</button>
        </div>
      </div>
    </div>
  );
};

export default AddPatients;
