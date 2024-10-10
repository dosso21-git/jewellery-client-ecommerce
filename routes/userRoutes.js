const express = require('express');
const multer = require("multer")
const path = require('path')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const { createUser, loginUserCtrl, updatedUser, deleteaUser, getallUser, getaUser, restoreUser, blockUser, unblockUser, addAddress, getAllAddresses, updateAddress, deleteAddress } = require('../controllers/userController');
const { protect, getIpAddress, publicApiAccess } = require('../middleware/authMiddleware');
const cloudinary = require('../config/cloudinary.js');


const router = express.Router();


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

const upload = multer({ storage: storage }).single('image');

router.post('/register', publicApiAccess, createUser);
router.post('/login', publicApiAccess, loginUserCtrl);
router.get('/getalluser', publicApiAccess, protect, getallUser)
router.get('/getuser', publicApiAccess, getaUser)
router.put('/update', publicApiAccess, protect, upload, updatedUser);
router.put('/restore/:id', protect, restoreUser);
router.delete('/delete/:id', protect, deleteaUser);
router.put('/block/:id', protect, blockUser)
router.put('/unblock/:id', protect, unblockUser)

router.post('/add/address', protect, addAddress);
router.get('/get/address', protect, getAllAddresses);
router.put('/address/update/:id', protect, updateAddress);
router.delete('/address/delete/:id', protect, deleteAddress);

module.exports = router;


// {
//     "addressLine1": "123 Main St",
//     "addressLine2": "Apt 4B",
//     "city": "New York City",
//     "state": "NY",
//     "country": "USA",
//     "postalCode": "10001",
//     "phone": "1234567890",
//     "isDefault": true
// }