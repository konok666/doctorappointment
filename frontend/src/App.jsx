import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar'; // Navbar component
import Home from './Pages/Home'; // Home page
import Contact from './Pages/Contact'; // Contact page
import About from './Pages/About'; // About page
import AllDoctor from './Pages/AllDoctor';  // AllDoctor page
import Login from './Pages/Login';  // Login page
import Signup from './Pages/Signup';  // Signup page
import MyProfile from './Pages/MyProfile'; // Correctly importing the Login component
import AdminLogin from './Pages/AdminLogin'; // Admin login page
import AdminPanel from './Pages/AdminPanel';  // Admin panel page
import DoctorProfile from "./Pages/DoctorProfile";  // Correctly importing the
import PatientForm from "./Pages/PatientForm";  // Patient form page

function App() {
  return (
    <Router>
      <div  className="App">
        {/* Navigation bar */}
        <Navbar />

        {/* Main content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/all-doctors" element={<AllDoctor />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/doctor-profile" element={<DoctorProfile />} />
            <Route path="/patient-form" element={<PatientForm />} />
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
