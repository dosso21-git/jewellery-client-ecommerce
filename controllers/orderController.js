const Order = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");
const cartModel = require("../models/cartModel");



exports.createOrder = async (req, res) => {
  try {
    // Step 1: Retrieve user from the request (assuming user info is attached via middleware like JWT)
    const user = req.user;

    // Step 2: Get the cart items for the user
    const cart = await cartModel.findOne({ user: user._id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Step 3: Get the discounted price and discount type from the request body
    const { discountedPrice, discountType } = req.body;

    if (!discountedPrice || !discountType) {
      return res.status(400).json({ message: 'Discounted price and type are required' });
    }

    // Step 4: Create a new order with cart items and discounted info
    const order = new Order({
      user: user._id,                 // User ID
      items: cart.items,              // Cart items
      totalAmount: cart.totalPrice,   // Total price before discount
      discountedPrice,                // Discounted price
      discountType,                   // Discount type (e.g., percentage or flat)
      status: 'Pending',              // Order status (can be modified as needed)
      createdAt: new Date()           // Timestamp for when the order was created
    });

    // Step 5: Save the order
    await order.save();

    // Step 6: Optionally, clear the cart after order creation
    await cartModel.findOneAndUpdate({ user: user._id }, { items: [] });

    // Step 7: Send response
    return res.status(201).json({ message: 'Order created successfully', order });

  } catch (error) {
    console.error('Error creating order:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId")
      .populate("items.productId");
    return res.status(200).json({ orders });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching orders", error: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId)
      .populate("userId")
      .populate("items.productId");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json({ order });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching order", error: error.message });
  }
};

// Update an order by ID
exports.updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const updates = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(orderId, updates, {
      new: true,
    });
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res
      .status(200)
      .json({ message: "Order updated successfully", order: updatedOrder });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error updating order", error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting order", error: error.message });
  }
};
