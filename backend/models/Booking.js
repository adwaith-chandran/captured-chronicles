const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, enum: ['Wedding', 'Portrait', 'Event', 'Other'], default: 'Other' },
    message: { type: String },
    date: { type: Date }, // Event date
    status: { type: String, default: 'Pending' }, // Pending, Confirmed, Cancelled
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);