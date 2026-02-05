const express = require('express');
const cors = require('cors');
const path = require('path');
// ... other imports

const app = express();

app.use(cors());
app.use(express.json()); // This is fine for regular JSON data
app.use(express.urlencoded({ extended: true })); // This helps with form data
// ... after app.use(express.json())
app.use('/api/bookings', require('./routes/bookingRoutes'));


// Static folder for images
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
