const express = require('express');
const { addToCart, removeFromCart, updateCartItem, clearCart, checkout } = require('../controllers/cartController');
const router = express.Router();


// Routes for cart operations
router.post('/cart/add', addToCart);
router.post('/cart/remove', removeFromCart);
router.post('/cart/update', updateCartItem);
router.post('/cart/clear', clearCart);
router.post('/cart/checkout', checkout);

module.exports = router;
