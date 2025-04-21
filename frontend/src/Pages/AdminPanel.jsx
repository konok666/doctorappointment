import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserMd, FaCalendarCheck, FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdDashboard, MdPersonAdd } from "react-icons/md";
import { IoMdListBox } from "react-icons/io";
import "../Style/AdminPanel.css";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("dashboard");

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
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <div className="dashboard-home">
            <h2>Welcome to Admin Panel</h2>
            <p>Select an option from the sidebar to manage doctors, patients, and appointments.</p>
          </div>
        );
      case "appointments":
        navigate("/view-patients");
        return null;
      case "addPatient":
        navigate("/add-patient");
        return null;
      case "addDoctor":
        navigate("/add-doctors");
        return null;
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
                  <button className="remove-doctor-btn" onClick={() => removeDoctor(index)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <h2>Page not found</h2>;
    }
  };

  return (
    <div className="admin-panel flex">
      <div className="admin-sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={() => setActivePage("dashboard")}>
            <MdDashboard /> Dashboard
          </li>
          <li onClick={() => setActivePage("appointments")}>
            <FaCalendarCheck /> Appointments
          </li>
          <li onClick={() => setActivePage("doctorsList")}>
            <IoMdListBox /> Doctors List
          </li>
          <li onClick={() => setActivePage("addPatient")}>
            <MdPersonAdd /> Add Patient
          </li>
          <li onClick={() => setActivePage("addDoctor")}>
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
