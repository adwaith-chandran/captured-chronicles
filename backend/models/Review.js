const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    service: { type: String }, // e.g., Wedding, Lifestyle
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', ReviewSchema);