const express = require('express');
const router = express.Router();
const { createBooking, getBookings } = require('../controllers/bookingController');

// This matches http://localhost:5000/api/bookings
router.post('/contact', createBooking);
router.get('/all', getBookings);

module.exports = router;