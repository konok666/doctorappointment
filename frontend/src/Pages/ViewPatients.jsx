import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/ViewPatients.css"; // Ensure the path is correct

const ViewPatients = () => {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedPatient, setEditedPatient] = useState({});

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/patients/view");
        if (response.data && response.data.patients) {
          setPatients(response.data.patients);
        } else {
          setError("No data returned from server.");
        }
      } catch (err) {
        setError("Failed to fetch patients. Server may be down.");
        console.error("Error fetching patients:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const handleEdit = (patient) => {
    setEditingId(patient._id);
    setEditedPatient({
      ...patient,
      bookingDate: new Date(patient.bookingDate).toISOString().split("T")[0], // format date for input
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPatient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/patients/update/${id}`,
        {
          ...editedPatient,
          _id: id // include id explicitly
        }
      );
      if (response.status === 200) {
        setPatients((prev) =>
          prev.map((p) => (p._id === id ? { ...editedPatient, _id: id } : p))
        );
        setEditingId(null);
        alert("Patient updated successfully!");
      }
    } catch (err) {
      setError("Failed to update patient.");
      console.error("Error updating patient:", err?.response?.data || err.message);
    }
  };
  
  const handleDelete = async (patientId) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this patient?");
      if (!confirmDelete) return;

      const response = await axios.delete(`http://localhost:5000/api/patients/delete/${patientId}`);
      if (response.status === 200) {
        setPatients(patients.filter((patient) => patient._id !== patientId));
        alert("Patient deleted successfully!");
      }
    } catch (err) {
      setError("Failed to delete patient.");
      console.error("Error deleting patient:", err);
    }
  };

  return (
    <div className="view-patients-page">
      <h2>Patient List</h2>

      <button className="back-button" onClick={() => navigate("/admin-panel")}>
        Back to Dashboard
      </button>

      {loading ? (
        <p>Loading patients...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <table className="patients-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Problem</th>
              <th>Address</th>
              <th>Booking Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient._id}>
                {editingId === patient._id ? (
                  <>
                    <td>
                      <input
                        name="name"
                        value={editedPatient.name}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="email"
                        value={editedPatient.email}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="age"
                        type="number"
                        value={editedPatient.age}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="problem"
                        value={editedPatient.problem}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="address"
                        value={editedPatient.address}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="bookingDate"
                        type="date"
                        value={editedPatient.bookingDate}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <button onClick={() => handleUpdate(patient._id)} className="save-button">
                        Update
                      </button>
                      <button onClick={() => setEditingId(null)} className="cancel-button">
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{patient.name}</td>
                    <td>{patient.email}</td>
                    <td>{patient.age}</td>
                    <td>{patient.problem}</td>
                    <td>{patient.address}</td>
                    <td>{new Date(patient.bookingDate).toLocaleDateString()}</td>
                    <td>
                      <button onClick={() => handleEdit(patient)} className="edit-button">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(patient._id)} className="delete-button">
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewPatients;
