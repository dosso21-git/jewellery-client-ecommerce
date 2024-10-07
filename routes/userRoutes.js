const express = require('express');
const { createUser, loginUserCtrl } = require('../controllers/userController');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);

module.exports = router;
