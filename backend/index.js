// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON payloads

// Route Imports
const signupRouter = require('./App/routes/signuproutes');
const loginRouter = require('./App/routes/LoginRoutes');
const appointmentRouter = require('./App/routes/AppointmentRoutes');
const doctorRouter = require('./App/routes/DoctorRoutes');
const patientRouter = require('./App/routes/PatientRoutes');

// Mount the routes
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/appointment', appointmentRouter);
app.use('/api/doctors', doctorRouter);
app.use('/api/patients', patientRouter);
//app.use('/uploads', express.static('uploads'));


// Database Connection
mongoose
  .connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    // Start the server only after the database connection is established
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit the process with an error code
  });
