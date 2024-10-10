const Offers = require('../models/offersModel');
const PopularProduct = require('../models/popularProductModel');
const productModel = require('../models/productModel');
const Product = require('../models/productModel');
const RecentView = require('../models/recentViewModel');
const User = require('../models/userModel');

const getCounts = async (req, res) => {
    try {
        const offersCount = await Offers.countDocuments();
        const popularProductsCount = await PopularProduct.countDocuments();
        const productsCount = await Product.countDocuments();
        const recentViewsCount = await RecentView.countDocuments();
        const usersCount = await User.countDocuments();
        const products = await Product.find().populate('ratings');

        const topRatedProductsCount = products.filter(product => {
            const totalRating = product.ratings.reduce((sum, rating) => sum + rating.star, 0);
            const averageRating = totalRating / product.ratings.length || 0;
            return averageRating >= 4;
        }).length;

        return res.status(200).json({
            message: 'Counts retrieved successfully',
            counts: {
                offers: offersCount,
                popularProducts: popularProductsCount,
                products: productsCount,
                recentViews: recentViewsCount,
                users: usersCount,
                topRatedProducts: topRatedProductsCount,
            },
        });
    } catch (error) {
        console.error('Error retrieving counts:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const getallsearch = async (req, res) => {
    try {
      const { query } = req.query; 
      const productResults = await productModel.find({
        $or: [
          { title: new RegExp(query, 'i') },
          { category: new RegExp(query, 'i') }
        ]
      });
      const result = {
        products: productResults
      };
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
module.exports = { getCounts,getallsearch }