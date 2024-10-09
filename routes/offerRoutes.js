const express = require('express');
const { createOffer, getAllOffers, getOfferById, deleteOffer, updateOffer, applyOfferToProduct } = require('../controllers/offerController');
const { protect, publicApiAccess } = require('../middleware/authMiddleware')

const router = express.Router();

router.post('/admin/offers', protect, createOffer);
router.get('/get/offers', publicApiAccess, getAllOffers);
router.get('/offers/:id', publicApiAccess, getOfferById);
router.put('/admin/update/offers/:id', protect, updateOffer);
router.delete('/admin/delete/offers/:id', protect, deleteOffer);

router.post('/offers/apply/:offerId', applyOfferToProduct);

module.exports = router;