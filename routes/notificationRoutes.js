const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { sendGlobalNotification, markNotificationAsRead } = require('../controllers/notificationController');

const router = express.Router();


router.post('/send/notification', protect, sendGlobalNotification)
router.put('/notification/mark', protect, markNotificationAsRead)

module.exports = router;