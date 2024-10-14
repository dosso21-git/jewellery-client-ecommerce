const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    offer: {
        type: String,
        // required: true
    },
    discount: {
        type: Number,
        // required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    imagePublicId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Banner', bannerSchema);