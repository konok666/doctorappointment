import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar'; // Navigation bar
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import AllDoctor from './Pages/AllDoctor';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import MyProfile from './Pages/MyProfile';
import AdminLogin from './Pages/AdminLogin';
import AdminPanel from './Pages/AdminPanel';
import DoctorProfile from './Pages/DoctorProfile';
import PatientForm from './Pages/PatientForm';
//import AddDoctors from './Pages/AddDoctors';
import AddPatients from './Pages/AddPatients';
import ViewPatients from './Pages/ViewPatients';
import FormPatientEdit from './Pages/FormPatientEdit';
import AddDoctors from './Pages/AddDoctors';
 // Fixed casing (Capital "C")

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation bar */}
        <Navbar />

        {/* Main content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/all-doctors" element={<AllDoctor />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/doctor-profile" element={<DoctorProfile />} />
            <Route path="/patient-form" element={<PatientForm />} />
            <Route path="/add-doctors" element={<AddDoctors  />} />
            <Route path="/add-patient" element={<AddPatients />} />
            <Route path="/view-patients" element={<ViewPatients  />} />
            <Route path="/edit-patients/:id" element={<FormPatientEdit />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <p>Contact us for more information.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
