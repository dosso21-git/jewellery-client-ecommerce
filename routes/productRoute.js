const express = require('express');
const router = express.Router();
const multer = require("multer")
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const path = require("path")
const { createProduct, getProductById, deleteProduct, updateProduct, getAllProducts, getProductsByCategory, deleteProductPicture } = require('../controllers/productController');
const { protect, getIpAddress, publicApiAccess, } = require('../middleware/authMiddleware');
const cloudinary = require('../config/cloudinary.js');
const { giveRating } = require('../controllers/ratingController.js');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'products',
        public_id: (req, file) => {
            const fileNameWithoutExt = path.parse(file.originalname).name;
            return Date.now() + '-' + fileNameWithoutExt;
        },
        resource_type: 'image',
    },
});

const upload = multer({ storage: storage }).array('pictures', 10);

// Without Login
router.post('/admin/create', protect, upload, createProduct);
router.get('/product/getall', publicApiAccess, getAllProducts);
router.get('/product/get/:id', publicApiAccess, getIpAddress, getProductById);
router.get('/product/category/:category', publicApiAccess, getProductsByCategory);

// With Login
router.delete('/admin/delete/:id', protect, deleteProduct);
router.delete('/admin/delete/:productId/image/:pictureIndex', protect, deleteProductPicture); // Not working
router.put('/admin/update/:id', protect, upload, updateProduct);
router.post('/product/rate', protect, giveRating);

module.exports = router;