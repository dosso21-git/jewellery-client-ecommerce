const mongoose = require("mongoose");

var offerSchema = new mongoose.Schema(
    {
        offer: {
            type: String
        },
        discount: {
            type: Number,
            enum: ['Coupon', 'Offers']
        },
        prodCategory:{
            type: mongoose.Schema.Types.ObjectId
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Offers", offerSchema);