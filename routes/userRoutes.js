const express = require('express');
const { createUser, loginUserCtrl, updatedUser, deleteaUser, getallUser, getaUser, restoreUser, blockUser, unblockUser } = require('../controllers/userController');
const { protect, getIpAddress, publicApiAccess } = require('../middleware/authMiddleware');
const router = express.Router();


router.post('/register', publicApiAccess, createUser);
router.post('/login', publicApiAccess, loginUserCtrl);
router.get('/getalluser', publicApiAccess, protect, getallUser)
router.get('/getuser/:id', publicApiAccess, getaUser)
router.put('/update', publicApiAccess, protect, updatedUser);
router.put('/restore/:id', protect, restoreUser);
router.delete('/delete/:id', protect, deleteaUser);
router.put('/block/:id', protect, blockUser)
router.put('/unblock/:id', protect, unblockUser)

module.exports = router;