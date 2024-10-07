const express = require('express');
const router = express.Router();
const multer = require("multer")
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const path = require("path")
const { createProduct, getProductById, deleteProduct, updateProduct, getAllProducts, getProductsByCategory } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const cloudinary = require('../config/cloudinary.js');

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

router.post('/create', protect, upload, createProduct);
router.get('/product/getall', getAllProducts);
router.get('/product/get/:id', getProductById);
router.delete('/delete/:id', protect, deleteProduct);
router.put('/update/:id', protect, upload, updateProduct);
router.put('/product/category/:category', getProductsByCategory);

module.exports = router;