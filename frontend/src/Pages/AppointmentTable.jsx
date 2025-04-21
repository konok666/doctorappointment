import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Style/AppointmentTable.css";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/appointment/list");
        setPatients(response.data.data);
      } catch (error) {
        console.error("Error fetching patients:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const handleEdit = (patient) => {
    setEditId(patient._id);
    setEditData({ ...patient });
  };

  const handleCancel = () => {
    setEditId(null);
    setEditData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/appointment/update/${id}`,
        editData
      );

      const updatedPatient = response.data.updatedAppointment || response.data;

      setPatients((prev) =>
        prev.map((p) => (p._id === id ? updatedPatient : p))
      );
      setEditId(null);
      setEditData({});
    } catch (error) {
      console.error("Error updating patient:", error.response?.data || error.message);
      alert("Failed to update patient.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      try {
        await axios.delete(`http://localhost:5000/api/appointment/delete/${id}`);
        setPatients((prev) => prev.filter((p) => p._id !== id));
      } catch (error) {
        console.error("Error deleting appointment:", error.response?.data || error.message);
      }
    }
  };

  if (loading) return <div className="loading">Loading patients...</div>;

  return (
    <div className="patient-list-container">
      <div className="header-row">
        <h2>All Patient Appointments</h2>
        <button className="back-button" onClick={() => navigate("/admin-panel")}>
          Back to Dashboard
        </button>
      </div>

      {patients.length === 0 ? (
        <p className="no-records">No appointments found.</p>
      ) : (
        <table className="patient-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>Issue</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient._id}>
                {editId === patient._id ? (
                  <>
                    <td>
                      <input
                        name="patientName"
                        value={editData.patientName || ""}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="email"
                        value={editData.email || ""}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="phone"
                        value={editData.phone || ""}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="appointmentDate"
                        value={editData.appointmentDate?.substring(0, 10) || ""}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        name="appointmentTime"
                        value={editData.appointmentTime || ""}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="medicalIssue"
                        value={editData.medicalIssue || ""}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <button className="update-button" onClick={() => handleUpdate(patient._id)}>
                        Update
                      </button>
                      <button className="cancel-button" onClick={handleCancel}>
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{patient.patientName}</td>
                    <td>{patient.email}</td>
                    <td>{patient.phone}</td>
                    <td>{patient.appointmentDate?.substring(0, 10)}</td>
                    <td>{patient.appointmentTime}</td>
                    <td>{patient.medicalIssue}</td>
                    <td>
                      <button className="edit-button" onClick={() => handleEdit(patient)}>
                        Edit
                      </button>
                      <button className="delete-button" onClick={() => handleDelete(patient._id)}>
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

export default PatientList;
