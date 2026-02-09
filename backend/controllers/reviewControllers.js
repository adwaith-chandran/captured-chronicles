const Review = require('../models/Review');

exports.addReview = async (req, res) => {
    try {
        const { name, rating, comment, service } = req.body;
        const newReview = new Review({ name, rating, comment, service });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(500).json({ message: "Error saving review" });
    }
};

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().sort({ date: -1 });
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: "Error fetching reviews" });
    }
};