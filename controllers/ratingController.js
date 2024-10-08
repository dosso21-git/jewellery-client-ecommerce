const Rating = require("../models/ratingModel");
const Product = require("../models/productModel");

const giveRating = async (req, res) => {
    try {
        const { star, comment, productId } = req.body;
        const userId = req.user._id;

        if (!star || !productId) {
            return res.status(400).json({ message: "Star rating and product ID are required." });
        }

        const newRating = new Rating({
            star,
            comment,
            postedby: userId,
            product: productId,
        });

        const savedRating = await newRating.save();

        await Product.findByIdAndUpdate(
            productId,
            { $push: { ratings: savedRating._id } },
            { new: true }
        );

        const product = await Product.findById(productId).populate('ratings');
        const totalRatings = product.ratings.length;
        const totalStars = product.ratings.reduce((sum, rating) => sum + rating.star, 0);
        const averageRating = totalStars / totalRatings;

        await Product.findByIdAndUpdate(
            productId,
            { totalrating: averageRating.toFixed(1) },
            { new: true }
        );

        res.status(201).json(savedRating);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error." });
    }
};

module.exports = { giveRating };
