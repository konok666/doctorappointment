import React, { useState } from "react";
import { FaUserMd, FaCalendarCheck, FaUser } from "react-icons/fa";
import { MdDashboard, MdPersonAdd } from "react-icons/md";
import { IoMdListBox } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import "../Style/AdminPanel.css";

const AdminPanel = () => {
  const [activePage, setActivePage] = useState("appointments");

  const [appointments, setAppointments] = useState([
    { name: "Bishal Chaudhury", date: "24th July, 2024" },
    { name: "John Doe", date: "25th July, 2024" },
    { name: "Jane Smith", date: "26th July, 2024" },
  ]);

  const [doctors, setDoctors] = useState([
    { img: "/doc1.png", name: "Dr. Richard James", specialization: "Neurologist" },
    { img: "/doc2.png", name: "Dr. Sarah Connor", specialization: "Dermatologist" },
    { img: "/doc3.png", name: "Dr. Emily Clark", specialization: "Gynecologist" },
    { img: "/doc4.png", name: "Dr. John Doe", specialization: "Pediatrician" },
    { img: "/doc5.png", name: "Dr. Alice Green", specialization: "Gastroenterologist" },
    { img: "/doc6.png", name: "Dr. Alice Green", specialization: "General Physician" }
  ]);

  const removeAppointment = (index) => {
    setAppointments(appointments.filter((_, i) => i !== index));
  };

  const removeDoctor = (index) => {
    setDoctors(doctors.filter((_, i) => i !== index));
  };

  const renderContent = () => {
    switch (activePage) {
      case "appointments":
        return (
          <div className="latest-appointments">
            <h2><FaCalendarCheck /> Latest Appointments</h2>
            {appointments.map((appointment, index) => (
              <div key={index} className="appointment-item">
                <div className="appointment-details">
                  <img src="profile_pic.png" alt="Patient" />
                  <div>
                    <p className="font-bold">{appointment.name}</p>
                    <p className="text-sm text-gray-500">Booking on {appointment.date}</p>
                  </div>
                </div>
                <button className="close-btn" onClick={() => removeAppointment(index)}>
                  <AiOutlineClose />
                </button>
              </div>
            ))}
          </div>
        );

      case "addDoctor":
        return (
          <div className="add-doctor-page">
            <h2>Add Doctor</h2>
            <div className="doctor-form">
              <div className="upload-section">
                <input type="file" id="doctor-image" accept="image/*" style={{ display: "none" }} />
                <label htmlFor="doctor-image" className="upload-label">
                  <img src="/doc19.png" alt="Profile" className="profile" />
                  <p>Choose Profile</p>
                </label>
              </div>

              <div className="doctor-fields">
                <div className="left-column">
                  <label>Doctor Name</label>
                  <input type="text" className="small-width-input" placeholder="Enter doctor name" />
                  <label>Doctor Email</label>
                  <input type="email" className="small-width-input" placeholder="Enter email" />
                  <label>Doctor Password</label>
                  <input type="password" className="small-width-input" placeholder="Enter password" />
                  <label>Experience</label>
                  <select className="small-width-input">
                    <option value="">Select experience</option>
                    <option value="1">1 Year</option>
                    <option value="5">5 Years</option>
                    <option value="10">10+ Years</option>
                  </select>
                </div>

                <div className="right-column">
                  <label>Address</label>
                  <input type="text" className="small-width-input" placeholder="Enter address" />
                  <label>Speciality</label>
                  <select className="small-width-input">
                    <option value="">Select speciality</option>
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="Dentist">Dentist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Gynecologist">Gynecologist</option>
                    <option value="General Physician">General Physician</option>
                  </select>
                  <label>Education</label>
                  <input type="text" className="small-width-input" placeholder="Enter education" />
                  <label>Doctor Fees</label>
                  <input type="text" className="small-width-input" placeholder="Enter fees" />
                </div>
              </div>

              <div className="button-container">
                <button className="add-doctor-btn">Add Doctor</button>
              </div>
            </div>
          </div>
        );

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

      case "addPatients":
        return (
          <div className="add-patients-page">
            <h2>Add Patients</h2>
            <div className="patients-form">
              <div className="upload-section">
                <input type="file" id="patient-image" accept="image/*" style={{ display: "none" }} />
                <label htmlFor="patient-image" className="upload-label">
                  <img src="/profile_pic.png" alt="Profile" className="profile" />
                  <p>Choose Profile</p>
                </label>
              </div>

              <div className="patients-fields">
                <div className="left-column">
                  <label>Patient Name</label>
                  <input type="text" className="small-width-input" placeholder="Enter patient name" />
                  <label>Patient Email</label>
                  <input type="email" className="small-width-input" placeholder="Enter email" />
                  <label>Age</label>
                  <input type="number" className="small-width-input" placeholder="Enter age" />
                  <label>Patient Problem</label>
                  <input type="text" className="small-width-input" placeholder="Enter problem" />
                  <label>Address</label>
                  <input type="text" className="small-width-input" placeholder="Enter address" />
                  <label>Booking Date</label>
                  <input type="date" className="small-width-input" />
                </div>
              </div>

              <div className="button-container">
                <button className="add-patient-btn">Add Patient</button>
              </div>
            </div>
          </div>
        );

      default:
        return <h2>Dashboard</h2>;
    }
  };

  return (
    <div className="admin-panel flex">
      <div className="admin-sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={() => setActivePage("appointments")}><MdDashboard /> Appointments</li>
          <li onClick={() => setActivePage("addDoctor")}><MdPersonAdd /> Add Doctor</li>
          <li onClick={() => setActivePage("doctorsList")}><IoMdListBox /> Doctors List</li>
          <li onClick={() => setActivePage("addPatients")}><FaUser /> Add Patients</li>
        </ul>
      </div>

      <div className="admin-main-content">
        <div className="header-section">
          <div className="stats-card"><FaUserMd /><p>{doctors.length} Doctors</p></div>
          <div className="stats-card"><FaCalendarCheck /><p>{appointments.length} Appointments</p></div>
          <div className="stats-card"><FaUser /><p>5 Patients</p></div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel;
