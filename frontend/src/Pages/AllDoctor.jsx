import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/AllDoctor.css";

const AllDoctor = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState("All");
  const navigate = useNavigate(); // Hook for navigation

  const specialists = [
    "All",
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatrician",
    "Neurologist",
    "Gastroenterologist",
  ];

  const doctors = [
    {
      name: "Dr. Richard James",
      specialization: "Neurologist",
      status: "Available",
      imgSrc: "doc1.png",
    },
    {
      name: "Dr. Sarah Connor",
      specialization: "Dermatologist",
      status: "Available",
      imgSrc: "doc6.png",
    },
    {
      name: "Dr. Emily Clark",
      specialization: "Gynecologist",
      status: "Available",
      imgSrc: "doc9.png",
    },
    {
      name: "Dr. John Doe",
      specialization: "Pediatrician",
      status: "Available",
      imgSrc: "doc12.png",
    },
    {
      name: "Dr. Alice Green",
      specialization: "Gastroenterologist",
      status: "Available",
      imgSrc: "doc15.png",
    },
    {
      name: "Dr. Alice Green",
      specialization: "General Physician",
      status: "Available",
      imgSrc: "doc18.png",
    },
    {
      name: "Dr. John Doe",
      specialization: "Pediatrician",
      status: "Available",
      imgSrc: "doc11.png",
    },
    {
      name: "Dr. Richard James",
      specialization: "Neurologist",
      status: "Available",
      imgSrc: "doc3.png",
    },
    {
      name: "Dr. Sarah Connor",
      specialization: "Dermatologist",
      status: "Available",
      imgSrc: "doc4.png",
    },
    {
      name: "Dr. Alice Green",
      specialization: "Gastroenterologist",
      status: "Available",
      imgSrc: "doc13.png",
    },
    {
      name: "Dr. Richard James",
      specialization: "Neurologist",
      status: "Available",
      imgSrc: "doc2.png",
    },
    {
      name: "Dr. Emily Clark",
      specialization: "Gynecologist",
      status: "Available",
      imgSrc: "doc7.png",
    },
    
    {
      name: "Dr. Sarah Connor",
      specialization: "Dermatologist",
      status: "Available",
      imgSrc: "doc5.png",
    },
    {
      name: "Dr. John Doe",
      specialization: "Pediatrician",
      status: "Available",
      imgSrc: "doc10.png",
    },
    
    {
      name: "Dr. Alice Green",
      specialization: "General Physician",
      status: "Available",
      imgSrc: "doc17.png",
    },
    {
      name: "Dr. Emily Clark",
      specialization: "Gynecologist",
      status: "Available",
      imgSrc: "doc8.png",
    },
    {
      name: "Dr. Alice Green",
      specialization: "Gastroenterologist",
      status: "Available",
      imgSrc: "doc14.png",
    },
    
    {
      name: "Dr. Alice Green",
      specialization: "General Physician",
      status: "Available",
      imgSrc: "doc16.png",
    },
  ];
  const filteredDoctors =
    selectedSpecialist === "All"
      ? doctors
      : doctors.filter(
          (doctor) => doctor.specialization === selectedSpecialist
        );

  return (
    <div className="all-doctor-page">
      <aside className="specialist-list">
        <h3>Browse through the doctors specialist:</h3>
        <ul>
          {specialists.map((specialist, index) => (
            <li
              key={index}
              className={selectedSpecialist === specialist ? "active" : ""}
              onClick={() => setSelectedSpecialist(specialist)}
            >
              {specialist}
            </li>
          ))}
        </ul>
      </aside>

      <div className="doctor-section">
        <h2 className="available-doctors-heading">All Doctors</h2>
        <main className="doctor-cards">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <div
                className="doctor-card"
                key={index}
                onClick={() => navigate(`/doctor-profile`, { state: { doctor } })}
                style={{ cursor: "pointer" }}
              >
                <img src={doctor.imgSrc} alt={doctor.name} className="doctor-image" />
                <div className="doctor-info">
                  <span className="status available">● {doctor.status}</span>
                  <h4>{doctor.name}</h4>
                  <p>{doctor.specialization}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No doctors available for this specialization.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default AllDoctor;
