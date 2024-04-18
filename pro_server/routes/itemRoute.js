const express = require("express");
const reviewModel = require("../models/review");
const app = express();
const user = require("../models/user");
// Create Review
app.post('/makereview', async (req, res) => {
    try {
        const userId = req.body.userId; 
        const newReview = new reviewModel({
            ...req.body,
            // lidhja me user
            owner: userId,
        });
        await newReview.save();
        console.log(newReview);
        res.status(200).send(newReview);
    } catch (err) {
        res.status(500).send("Review not created " + err);
    }
});
// Read All Reviews
app.get('/readAllReviews', async (req, res) => {
    try {
        const allReviews = await reviewModel.find({});
        res.status(200).send(allReviews);
    } catch (err) {
        res.status(500).send("Data not read " + err);
    }
});

// Read One Review by ID
app.get('/readOne/:id', async (req, res) => {
    try {
        const reviewId = req.params.id;
        const oneReview = await reviewModel.findById(reviewId);
        res.status(200).send(oneReview);
    } catch (err) {
        res.status(500).send("Info not read " + err);
    }
});

// Update Review
app.patch('/updateReview/:id', async (req, res) => {
    try {
        const reviewId = req.params.id;
        const reviewUpdate = req.body;
        const updatedReview = await reviewModel.findByIdAndUpdate(reviewId, { $set: reviewUpdate }, { new: true });
        res.status(200).send(updatedReview);
    } catch (err) {
        res.status(500).send("Review not updated " + err);
    }
});

// Delete Review
app.delete('/delete/:id', async (req, res) => {
    try {
        const reviewId = req.params.id;
        await reviewModel.deleteOne({ _id: reviewId });
        res.status(200).send("Review deleted");
    } catch (err) {
        res.status(500).send("Review not deleted " + err);
    }
});

module.exports = app;
