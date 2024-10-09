const RecentView = require("../models/recentViewModel");


// Create Recent View
exports.createRecentView = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Assuming token is passed in the Authorization header

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token provided",
            });
        }

        // Verify and decode the token to get the user ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your JWT secret from environment variables
        const userId = decoded.id; // Assuming the token payload contains the user ID as 'id'

        const { productId } = req.body;

        // Create a new RecentView instance with productId and the userId from the token
        const recentView = new RecentView({
            productId,
            visitedby: userId, // Set the userId as the visitedby field
        });

        // Save the recent view
        await recentView.save();

        // Populate the 'visitedby' and 'productId' fields
        const populatedRecentView = await RecentView.findById(recentView._id)
            .populate('visitedby')
            .populate('productId');

        // Send the response with the populated recent view data
        res.status(201).json({
            success: true,
            data: populatedRecentView,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to create recent view",
            error: error.message,
        });
    }
};

// Get All Recent Views
exports.getRecentViews = async (req, res) => {
    try {
        const recentViews = await RecentView.find()
            .populate("productId")

        res.status(200).json({
            success: true,
            data: recentViews,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to fetch recent views",
            error: error.message,
        });
    }
};

// Get Recent Views by User
exports.getRecentViewsByUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const recentViews = await RecentView.find({ visitedby: userId })
            .populate("productId", "productName price")
            .populate("visitedby", "name email");

        res.status(200).json({
            success: true,
            data: recentViews,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to fetch recent views for this user",
            error: error.message,
        });
    }
};

// Update Recent View
exports.updateRecentView = async (req, res) => {
    try {
        const { id } = req.params;
        const { productId, visitedby } = req.body;

        const updatedRecentView = await RecentView.findByIdAndUpdate(
            id,
            { productId, visitedby },
            { new: true, runValidators: true }
        );

        if (!updatedRecentView) {
            return res.status(404).json({
                success: false,
                message: "Recent view not found",
            });
        }

        res.status(200).json({
            success: true,
            data: updatedRecentView,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to update recent view",
            error: error.message,
        });
    }
};

// Delete Recent View
exports.deleteRecentView = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedRecentView = await RecentView.findByIdAndDelete(id);

        if (!deletedRecentView) {
            return res.status(404).json({
                success: false,
                message: "Recent view not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Recent view deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to delete recent view",
            error: error.message,
        });
    }
};
