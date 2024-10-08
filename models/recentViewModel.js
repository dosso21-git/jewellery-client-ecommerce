// models/recentViewModel.js

const mongoose = require("mongoose");

// Define recentViewSchema
const RecentViewSchema = new mongoose.Schema(
    {
        productId: [{
            type: mongoose.Schema.ObjectId,
            ref: "Product",
        }],
        visitedby: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

// Export the model
const RecentView = mongoose.model("RecentView", RecentViewSchema);
module.exports = RecentView;
