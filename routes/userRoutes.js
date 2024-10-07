const express = require('express');
const { createUser, loginUserCtrl, updatedUser, deleteaUser, getallUser, getaUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/getalluser', getallUser)
router.get('/getuser/:id', getaUser)
router.put('/update', protect, updatedUser);
router.delete('/delete/:id', deleteaUser);

module.exports = router;
