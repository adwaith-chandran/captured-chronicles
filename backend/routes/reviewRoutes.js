const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// POST: Create a new review
router.post('/', async (req, res) => {
  try {
    const { name, rating, comment } = req.body;

    // Basic Validation
    if (!name || !rating || !comment) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newReview = new Review({
      name,
      rating,
      comment
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(500).json({ message: "Error saving review", error: err.message });
  }
});

// GET: Fetch all approved reviews (to display on your page)
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({ approved: true }).sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;