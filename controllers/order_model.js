
const Order = require("../models/order_model");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");
// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { userId } = req.user;
    console.log("dernjh", userId);
    
    const user = await userModel.findOne(userId);
    const { totalAmount, productId } = req.body; // Destructure productId first from req.body

    // Check if userId or productId are provided
    if (!userId ) {
      return res.status(400).json({ message: 'User missing' });
    }

    // Find the user and product by their respective IDs

    const product = await productModel.findById(productId);

    // Handle if user or product is not found
    if (!user || !product) {
      return res.status(404).json({ message: "User or product not found" });
    }

    // Create a new order
    const newOrder = new Order({
      userId,
      totalAmount,
      productId,
    });

    // Save the order to the database
    await newOrder.save();

    // Return a success response with the created order
    return res.status(201).json({ message: 'Order created successfully', order: newOrder });
    
  } catch (error) {
    // Catch any error and return an error response
    return res.status(500).json({ message: 'Error creating order', error: error.message });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('userId').populate('items.productId');
    return res.status(200).json({ orders });
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
};


// Get a specific order by ID
exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId).populate('userId').populate('items.productId');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json({ order });
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching order', error: error.message });
  }
};

// Update an order by ID
exports.updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const updates = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(orderId, updates, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    return res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
  } catch (error) {
    return res.status(400).json({ message: 'Error updating order', error: error.message });
  }
};

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    return res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting order', error: error.message });
  }
};