const express = require('express');
const { protect,publicApiAccess } = require('../middleware/authMiddleware');
const { sendGlobalNotification, markNotificationAsRead } = require('../controllers/notificationController');

const router = express.Router();


router.post('/send/notification', protect, sendGlobalNotification)
router.put('/notification/markread/:notificationId', protect, publicApiAccess, markNotificationAsRead)

module.exports = router;