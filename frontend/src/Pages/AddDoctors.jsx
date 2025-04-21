import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Style/AddDoctorPage.css";

const AddDoctorPage = () => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    email: "",
    password: "",
    experience: "",
    address: "",
    specialty: "",
    education: "",
    fees: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const addDoctor = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/doctors/insert", doctorData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="add-doctor-page">
      <div className="header-row">
        <button className="back-button" onClick={() => navigate("/admin-panel")}>
          Back to Dashboard
        </button>
        <h2 className="add-doctor-title">Add Doctor</h2>
        <div className="spacer" /> {/* To keep center alignment */}
      </div>

      <div className="doctor-form">
        <div className="doctor-fields">
          <div className="left-column">
            <label>Doctor Name</label>
            <input
              type="text"
              name="name"
              value={doctorData.name}
              onChange={handleInputChange}
              className="small-width-input"
              placeholder="Enter doctor name"
            />
            <label>Doctor Email</label>
            <input
              type="email"
              name="email"
              value={doctorData.email}
              onChange={handleInputChange}
              className="small-width-input"
              placeholder="Enter email"
            />
            <label>Doctor Password</label>
            <input
              type="password"
              name="password"
              value={doctorData.password}
              onChange={handleInputChange}
              className="small-width-input"
              placeholder="Enter password"
            />
            <label>Experience</label>
            <select
              name="experience"
              value={doctorData.experience}
              onChange={handleInputChange}
              className="small-width-input"
            >
              <option value="">Select experience</option>
              <option value="1">1 Year</option>
              <option value="5">5 Years</option>
              <option value="10">10+ Years</option>
            </select>
          </div>

          <div className="right-column">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={doctorData.address}
              onChange={handleInputChange}
              className="small-width-input"
              placeholder="Enter address"
            />
            <label>Specialty</label>
            <select
              name="specialty"
              value={doctorData.specialty}
              onChange={handleInputChange}
              className="small-width-input"
            >
              <option value="">Select specialty</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dentist">Dentist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="General Physician">General Physician</option>
            </select>
            <label>Education</label>
            <input
              type="text"
              name="education"
              value={doctorData.education}
              onChange={handleInputChange}
              className="small-width-input"
              placeholder="Enter education"
            />
            <label>Doctor Fees</label>
            <input
              type="text"
              name="fees"
              value={doctorData.fees}
              onChange={handleInputChange}
              className="small-width-input"
              placeholder="Enter fees"
            />
          </div>
        </div>

        <div className="button-container">
          <button onClick={addDoctor} className="add-doctor-btn">
            Add Doctor
          </button>
        </div>
        {message && <p className="response-message">{message}</p>}
      </div>
    </div>
  );
};

export default AddDoctorPage;
