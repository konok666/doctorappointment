import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserMd, FaCalendarCheck, FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdDashboard, MdPersonAdd } from "react-icons/md";
import { IoMdListBox } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import "../Style/AdminPanel.css";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("appointments");

  const [doctors, setDoctors] = useState([
    { img: "/doc1.png", name: "Dr. Richard James", specialization: "Neurologist" },
    { img: "/doc2.png", name: "Dr. Sarah Connor", specialization: "Dermatologist" },
    { img: "/doc3.png", name: "Dr. Emily Clark", specialization: "Gynecologist" },
    { img: "/doc4.png", name: "Dr. John Doe", specialization: "Pediatrician" },
    { img: "/doc5.png", name: "Dr. Alice Green", specialization: "Gastroenterologist" },
    { img: "/doc6.png", name: "Dr. Konok Sarkar", specialization: "General Physician" },
  ]);

  const removeDoctor = (index) => {
    setDoctors(doctors.filter((_, i) => i !== index));
  };

  const handleLogout = () => {
    // Clear token or session if using any auth
    localStorage.removeItem("adminToken"); // adjust key as needed
    navigate("/admin-login");
  };

  const renderContent = () => {
    switch (activePage) {
      case "doctorsList":
        return (
          <div className="doctors-list-container">
            <h2 className="doctors-list-heading">Doctors List</h2>
            <div className="admin-doctor-cards">
              {doctors.map((doctor, index) => (
                <div key={index} className="admin-doctor-card">
                  <img src={doctor.img} alt="Doctor" />
                  <div className="admin-doctor-info">
                    <span className="status">Available</span>
                    <h2>{doctor.name}</h2>
                    <p>{doctor.specialization}</p>
                  </div>
                  <button
                    className="remove-doctor-btn"
                    onClick={() => removeDoctor(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <h2>Welcome to Admin Panel</h2>;
    }
  };

  return (
    <div className="admin-panel flex">
      <div className="admin-sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={() => setActivePage("appointments")}>
            <MdDashboard /> Dashboard
          </li>
          <li onClick={() => navigate("/view-patients")}>
            <FaCalendarCheck /> Appointments
          </li>
          <li onClick={() => setActivePage("doctorsList")}>
            <IoMdListBox /> Doctors List
          </li>
          <li onClick={() => navigate("/add-patient")}>
            <MdPersonAdd /> Add Patient
          </li>
          <li onClick={() => navigate("/add-doctors")}>
            <MdPersonAdd /> Add Doctor
          </li>
          <li onClick={handleLogout} style={{ color: "red", fontWeight: "bold" }}>
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </div>

      <div className="admin-main-content">
        <div className="header-section">
          <div className="stats-card">
            <FaUserMd />
            <p>{doctors.length} Doctors</p>
          </div>
          <div className="stats-card">
            <FaUser />
            <p>5 Patients</p>
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel;
