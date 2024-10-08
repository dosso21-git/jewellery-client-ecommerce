const Offers = require('../models/Offers'); 
const PopularProduct = require('../models/PopularProduct');
const Product = require('../models/Product');
const RecentView = require('../models/RecentView');
const User = require('../models/User');

const getCounts = async (req, res) => {
  try {
    const offersCount = await Offers.countDocuments();
    const popularProductsCount = await PopularProduct.countDocuments();
    const productsCount = await Product.countDocuments();
    const recentViewsCount = await RecentView.countDocuments();
    const usersCount = await User.countDocuments();

    // Send response with all counts
    return res.status(200).json({
      message: 'Counts retrieved successfully',
      counts: {
        offers: offersCount,
        popularProducts: popularProductsCount,
        products: productsCount,
        recentViews: recentViewsCount,
        users: usersCount,
      },
    });
  } catch (error) {
    console.error('Error retrieving counts:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};