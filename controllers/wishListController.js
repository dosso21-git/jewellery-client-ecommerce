const User = require('../models/User');
const Product = require('../models/Product');

// Add product to wishlist
const addToWishlist = async (req, res) => {
    const { userId, productId } = req.body;
    try {
        const user = await User.findById(userId);
        const product = await Product.findById(productId);
        
        if (!user || !product) {
            return res.status(404).json({ message: 'User or Product not found' });
        }

        // Check if product is already in wishlist
        if (!user.wishlist.includes(productId)) {
            user.wishlist.push(productId);
            await user.save();
            return res.status(200).json({ message: 'Product added to wishlist' });
        } else {
            return res.status(400).json({ message: 'Product already in wishlist' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Remove product from wishlist
const removeFromWishlist = async (req, res) => {
    const { userId, productId } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.wishlist = user.wishlist.filter(item => item.toString() !== productId);
        await user.save();
        return res.status(200).json({ message: 'Product removed from wishlist' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Get wishlist items
const getWishlist = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId).populate('wishlist');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user.wishlist);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



module.exports = {
    addToWishlist,
    removeFromWishlist,
    getWishlist
};
