const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
  approved: { type: Boolean, default: false } // Optional: Keep reviews hidden until you approve them
});

module.exports = mongoose.model('Review', reviewSchema);