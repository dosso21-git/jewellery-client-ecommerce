const Product = require("../models/productModel");
const cloudinary = require("../config/cloudinary");
const PopularProduct = require("../models/popularProductModel");
const jwt = require("jsonwebtoken");
const RecentView = require("../models/recentViewModel");
const Order = require("../models/orderModel");
const Cart = require("../models/cartModel");
const Wishlist = require("../models/wishListModel");
const { default: mongoose } = require("mongoose");
const productModel = require("../models/productModel");
const Rating = require("../models/ratingModel");
const cartModel = require('../models/cartModel');
const { putObject } = require("../config/putObject");

const createProduct = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        error: { fileError: "No pictures uploaded or invalid file type" },
      });
    }

    const pictureUrls = req.files.map((file) => file.path);
    const newProduct = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      quantity: req.body.quantity,
      images: pictureUrls,
    });

    await newProduct.save();
    return res.status(201).json({
      message: "Product created successfully",
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ error: "Server Error" });
  }
};




const createProductTest = async (req, res) => {
  try {
    const { file } = req.files;
    console.log('file', file);
    
    // Use a timestamp for the filename, formatted to include milliseconds
    const fileName = `images/${Date.now()}`;
    
    const { url, key } = await putObject(file.data, fileName);
    console.log('url key', url, key);
    
    return res.send(url);
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ error: "Server Error" });
  }
};


const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json({ data: product });
  } catch (error) {
    res.status(500).json({ message: "Error fetching Products", error });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate({
      path: "ratings",
      select: "star comment postedby",
      populate: {
        path: "postedby",
        select: "username",
      },
    });


    //if user login then send its cart length
    // const token = req.headers.authorization?.split(" ")[1];

    // console.log(token);

    // if (token) {
    //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //   const userId = decoded.id;


    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    console.log(product);
    const token = req.headers.authorization?.split(" ")[1];

    console.log(token);
let cart ;
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.id;

      const productId = id;
      var recentView = await RecentView.findOne({
        productId,
        visitedby: userId,
      });
      console.log(recentView);
      if (recentView) {
        recentView.count += 1;
      } else {
        recentView = new RecentView({
          productId,
          visitedby: userId,
          count: 1,
        });

        console.log(recentView);
      }



       cart = await cartModel
      .findOne({ userId })
      .populate("items.productId");

      await recentView.save();
    }

    res.status(200).json({ data: product ,totalItems:cart?.items?.length});
  } catch (error) {
    res.status(500).json({ message: "Error fetching Product", error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (req.files && req.files.length > 0) {
      const uploadedImages = await Promise.all(
        req.files.map(async (file) => {
          const result = await cloudinary.uploader.upload(file.path);
          return result.secure_url;
        })
      );

      existingProduct.images = [...existingProduct.images, ...uploadedImages];
    }

    existingProduct.title = req.body.title || existingProduct.title;
    existingProduct.description =
      req.body.description || existingProduct.description;
    existingProduct.price = req.body.price || existingProduct.price;
    existingProduct.category = req.body.category || existingProduct.category;
    existingProduct.quantity = req.body.quantity || existingProduct.quantity;

    const updatedProduct = await existingProduct.save();

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Error updating product", error });
  }
};

const deleteProduct = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { id } = req.params;

    const deletedProduct = await productModel.findById(id).session(session);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    const imagePaths = deletedProduct.images;
    for (const imageUrl of imagePaths) {
      const publicId = imageUrl.split("/").slice(-2).join("/").split(".")[0];
      await cloudinary.uploader.destroy(publicId, (error, result) => {
        if (error) {
          console.error(
            `Failed to delete image ${publicId} from Cloudinary:`,
            error
          );
        } else {
          console.log(
            `Image ${publicId} deleted successfully from Cloudinary.`
          );
        }
      });
    }

    await productModel.findByIdAndDelete(id).session(session);

    await Order.updateMany(
      { "items.productId": id },
      { $pull: { items: { productId: id } } }
    ).session(session);

    await Cart.updateMany(
      { "items.productId": id },
      { $pull: { items: { productId: id } } }
    ).session(session);

    await Wishlist.updateMany(
      { products: id },
      { $pull: { products: id } }
    ).session(session);

    await Rating.updateMany(
      { product: id },
      { $pull: { product: id } }
    ).session(session);

    await RecentView.updateMany(
      { productId: id },
      { $pull: { productId: id } }
    ).session(session);

    await PopularProduct.updateMany(
      { productId: id },
      { $pull: { productId: id } }
    ).session(session);

    await session.commitTransaction();
    session.endSession();

    res.status(200).json({ message: "Product and associated data deleted successfully" });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Error deleting product", error });
  }
};

const getMostSellingProducts = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  try {
    const products = await Product.find().sort({ sold: -1 }).limit(limit).populate('offer');
    return res.status(200).json({ data: products });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

const deleteProductPicture = async (req, res) => {
  const { productId, pictureIndex } = req.params;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    if (pictureIndex < 0 || pictureIndex >= product.images.length) {
      return res
        .status(400)
        .json({ error: { pictureError: "Invalid picture index" } });
    }
    const imageUrl = product.images[pictureIndex];
    console.log(`Image URL: ${imageUrl}`);
    const publicId = imageUrl.split("/").slice(-2).join("/").split(".")[0];
    console.log(
      `Attempting to delete Cloudinary image with publicId: "${publicId}"`
    );
    const cloudinaryResponse = await cloudinary.uploader.destroy(publicId);
    console.log(`Cloudinary Response:`, cloudinaryResponse);
    if (cloudinaryResponse.result !== "ok") {
      const resources = await cloudinary.api.resources({
        type: "upload",
        prefix: "products/",
        max_results: 500,
      });
      console.log("Existing Resources:", resources);
      return res.status(500).json({
        error: "Failed to delete image from Cloudinary",
        details: cloudinaryResponse,
      });
    }
    product.images.splice(pictureIndex, 1);
    await product.save();
    return res.status(200).json({
      message: "Picture deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting picture:", error);
    return res.status(500).json({ error: "Server Error" });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    console.log(category)
    const products = await Product.find({ category });
    if (!products || products.length === 0) {
      return res.status(404).json({
        message: "No products found in this category",
      });
    }
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error.message,
    });
  }
};

const trackProductView = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    let popularProduct = await PopularProduct.findOne({ productId });
    if (!popularProduct) {
      popularProduct = new PopularProduct({
        productId: product._id,
        popularityScore: 1,
      });
    } else {
      popularProduct.popularityScore += 1;
    }
    await popularProduct.save();
    return res.status(200).json({
      message: "Product view tracked successfully",
      popularityScore: popularProduct.popularityScore,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getPopularProducts = async (req, res) => {
  try {
    const popularProducts = await PopularProduct.find({})
      .sort({ popularityScore: -1 })
      .populate("productId");
    if (!popularProducts || popularProducts.length === 0) {
      return res.status(404).json({ message: "No popular products found" });
    }
    return res.status(200).json({
      message: "Popular products retrieved successfully",
      popularProducts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error  hai" });
  }
};

const checkStock = async (req, res) => {
  const { status } = req.query;
  let query;

  try {
    switch (status) {
      case 'in':
        query = { quantity: { $gt: 0 } };
        break;
      case 'out':
        query = { quantity: 0 };
        break;
      case 'near':
        const threshold = 5;
        query = { quantity: { $gt: 0, $lte: threshold } };
        break;
      default:
        return res.status(400).json({ message: 'Invalid status parameter. Use "in", "out", or "near".' });
    }

    const products = await Product.find(query);
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving stock items', error });
  }
};


const calcuLatePandL = async (req, res) => {
  try {
    const products = await Product.find();

    let totalProfit = 0;
    let totalLoss = 0;

    products.forEach(product => {
      const profit = (product.price - product.costPrice) * product.sold;
      if (profit >= 0) {
        totalProfit += profit;
      } else {
        totalLoss += Math.abs(profit);
      }
    });

    res.status(200).json({
      totalProfit,
      totalLoss,
      netProfit: totalProfit - totalLoss,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createProduct, getAllProducts, getProductById, deleteProduct, updateProduct, getProductsByCategory, getMostSellingProducts, deleteProductPicture, trackProductView, getPopularProducts, checkStock, calcuLatePandL,createProductTest
}; 