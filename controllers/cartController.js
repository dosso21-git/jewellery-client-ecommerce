const jwt = require("jsonwebtoken");
const productModel = require("../models/productModel");
const cartModel = require("../models/cartModel");

// Add item to cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity ,userId} = req.body;

    const product = await productModel.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await cartModel.findOne({ userId });

    if (!cart) {
      cart = new cartModel({ userId, items: [], totalItems: 0, totalPrice: 0 });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += quantity;
      cart.items[existingItemIndex].price = product.price;
    } else {
      cart.items.push({
        productId: product._id,
        quantity,
        price: product.price,
      });
    }

    cart.totalItems = cart.items.length;
    cart.totalPrice = cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  try {
    const { productId,userId } = req.body;

    let cart = await cartModel.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );
    cart.totalItems = cart.items.length;
    cart.totalPrice = cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Update item quantity in cart
exports.updateCartItem = async (req, res) => {
  try {
  
    const { productId, quantity,userId } = req.body;

    let cart = await cartModel.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity = quantity;
      cart.totalPrice = cart.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Delete all items in the cart
exports.clearCart = async (req, res) => {
  try {
  
    const userId = req.body.userId

    let cart = await cartModel.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = [];
    cart.totalItems = 0;
    cart.totalPrice = 0;

    await cart.save();
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Checkout and empty the cart
exports.checkout = async (req, res) => {
  try {
  
    const userId = req.body.userId;

    let cart = await cartModel.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = [];
    cart.totalItems = 0;
    cart.totalPrice = 0;

    await cart.save();
    res.status(200).json({ message: "Checkout successful and cart cleared" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
// Get all items in the cart for the logged-in user
  

// exports.getCartItems = async (req, res) => {
//     try {
    
//       const userId = req.body.userId;
  
//       const cart = await cartModel.findOne({ userId });
  
//       if (!cart || cart.items.length === 0) {
//         return res.status(404).json({ message: "No items found in the cart" });
//       }
  
//       res.status(200).json({
//         success: true,
//         items: cart.items,
//         totalItems: cart.totalItems,
//         totalPrice: cart.totalPrice,
//       });
//     } catch (err) {
//       res.status(500).json({ message: "Server error", error: err.message });
//     }
//   };





exports.getCartItems = async (req, res) => {
  try {
    const userId = req.body.userId;

    const cart = await cartModel.findOne({ userId }).populate('items.productId');

    if (!cart || cart.items.length === 0) {
      return res.status(404).json({ message: "No items found in the cart" });
    }

    // Calculate subtotal, shipping, tax, and total
    const shippingEstimate = 5.00; // Fixed shipping cost
    const taxRate = 0.18; // 18% tax rate
    let subtotal = 0;

    cart.items.forEach(item => {
      subtotal += item.price * item.quantity; // Calculate subtotal
    });

    const taxEstimate = subtotal * taxRate; // Calculate tax
    const orderTotal = subtotal + shippingEstimate + taxEstimate; // Calculate total

    res.status(200).json({
      success: true,
      items: cart.items,
      subtotal: subtotal.toFixed(2), // Format to 2 decimal places
      shippingEstimate: shippingEstimate.toFixed(2),
      taxEstimate: taxEstimate.toFixed(2),
      orderTotal: orderTotal.toFixed(2),
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
