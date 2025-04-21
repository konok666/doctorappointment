import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../Style/FormPatientEdit.css"; // Ensure this path is correct

const EditPatient = () => {
  const { id } = useParams(); // Get patient ID from URL
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    name: "",
    email: "",
    age: "",
    problem: "",
    address: "",
    bookingDate: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch patient data to pre-fill form
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/patients/view`);
        if (response.data && response.data.data) {
          const patientData = response.data.data;

          // Format bookingDate to YYYY-MM-DD for input compatibility
          const formattedDate = patientData.bookingDate
            ? new Date(patientData.bookingDate).toISOString().split("T")[0]
            : "";

          setPatient({ ...patientData, bookingDate: formattedDate });
        } else {
          setError("Patient not found.");
        }
      } catch (err) {
        setError("Failed to fetch patient data.");
        console.error("Error fetching patient data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatient();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/patients/update/${id}`,
        patient
      );
      if (response.status === 200) {
        alert("Patient updated successfully!");
        navigate("/view-patients");
      }
    } catch (err) {
      setError("Failed to update patient.");
      console.error("Error updating patient:", err);
    }
  };

  return (
    <div className="edit-patient-page">
      <h2>Edit Patient</h2>

      {loading ? (
        <p>Loading patient data...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={patient.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={patient.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={patient.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Problem:</label>
            <input
              type="text"
              name="problem"
              value={patient.problem}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={patient.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Booking Date:</label>
            <input
              type="date"
              name="bookingDate"
              value={patient.bookingDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit">Update Patient</button>
            <button type="button" onClick={() => navigate("/view-patients")}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditPatient;
