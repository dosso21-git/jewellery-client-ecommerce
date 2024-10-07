const express = require('express');
const { createUser, loginUserCtrl, updatedUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.put('/update', protect, updatedUser);

module.exports = router;
