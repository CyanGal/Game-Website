const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    review_title: {
        type: String,
        required: true,
    },
    review_description: {
        type: String,
        required: true,
    },
   
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
    },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;