const express = require('express');
const { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } = require('../controllers/order_model');
const router = express.Router();


// Order routes
router.post('/orders/create', createOrder);
router.get('/orders/getall', getAllOrders);
router.get('/orders/get/:id', getOrderById);
router.put('/orders/update/:id', updateOrder);
router.delete('/orders/delete/:id', deleteOrder);

module.exports = router;
