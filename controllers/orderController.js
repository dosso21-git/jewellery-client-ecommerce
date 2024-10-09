const Order = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");
const cartModel = require("../models/cartModel");



exports.createOrder = async (req, res) => {
  try {
    // Step 1: Retrieve user from the request (assuming user info is attached via middleware like JWT)
    const user = req.body.userId;
    console.log("gjhkjhkjhk",user)

    // Step 2: Get the cart items for the user
    const cart = await cartModel.findOne({ userId : req.body.userId});
    console.log(cart)
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }
    // Step 3: Get the discounted price and discount type from the request body
    const { discountedprice, discount_type } = req.body;
    if (!discountedprice || !discount_type) {
      return res.status(400).json({ message: 'Discounted price and type are required' });
    }

    // Step 4: Create a new order with cart items and discounted info
    const order = new Order({
      userId: req.body.userId,   
      items: cart.items,
      totalAmount: cart.totalPrice,
      discountedprice,   
      discount_type,                
      createdAt: new Date()
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

exports.getUserOrders = async (req, res) => {
  try {
    // Step 1: Retrieve user from the request (assuming user info is attached via middleware like JWT)
    const userId = req.body.userId;
    console.log("Logged-in User ID:", userId);
    // Step 2: Find all orders associated with the logged-in user
    const orders = await Order.find({ userId });
    // Step 3: Check if the user has any orders
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: 'No orders found for this user' });
    }
    // Step 4: Send response with all orders
    return res.status(200).json({ message: 'Orders retrieved successfully', orders });
  } catch (error) {
    console.error('Error fetching user orders:', error);
    return res.status(500).json({ message: 'Server error' });
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
