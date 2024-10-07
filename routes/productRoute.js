const express = require('express');
const router = express.Router();
const multer = require("multer")
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const path = require("path")
const { createProduct, getProductById, deleteProduct, updateProduct } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const cloudinary = require('../config/cloudinary.js');
const { getallUser } = require('../controllers/userController.js');

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
router.get('/getall', getallUser);
router.get('/getsingle', getProductById);
router.delete('/delete', protect, deleteProduct);
router.put('/update', protect, upload, updateProduct);

module.exports = router;