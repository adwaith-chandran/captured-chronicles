const Booking = require('../models/Booking');

// POST: Save a new contact/booking request
exports.createBooking = async (req, res) => {
    try {
        const { name, email, phone, service, message, date } = req.body;
        const newBooking = new Booking({ name, email, phone, service, message, date });
        await newBooking.save();
        res.status(201).json({ message: "Booking request sent successfully!", data: newBooking });
    } catch (err) {
        res.status(500).json({ message: "Error saving booking", error: err.message });
    }
};

// GET: Retrieve all bookings (for your admin panel)
exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: "Error fetching bookings" });
    }
};