const mongoose = require('mongoose');

// Combined Order Schema
const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalAmount: { type: Number, required: true },
  discountedprice: { type: Number, required: true},
  discount_type: { type: String,required: true},
  status: { type: String, enum: ['pending', 'completed', 'canceled'], default: 'pending' },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  }],
}, { timestamps: true });

// Create model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;