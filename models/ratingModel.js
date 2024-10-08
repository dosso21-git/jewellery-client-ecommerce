const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema(
    {
        star: {
            type: Number,
            min: 1,
            max: 5,
        },
        comment: {
            type: String,
        },
        postedby: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Rating", ratingSchema);