const mongoose = require("mongoose");

var productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        offer: {
            type: String,
        },
        sold: {
            type: Number,
            default: 0,
        },
        images: [String],
        ratings: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Rating",
            },
        ],
        totalrating: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);