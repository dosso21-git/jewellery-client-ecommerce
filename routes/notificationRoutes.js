const express = require('express');
const { protect, publicApiAccess } = require('../middleware/authMiddleware');
const { sendGlobalNotification, markNotificationAsRead, sendNotificationToUsers, getAllNotifications, getSingleNotification } = require('../controllers/notificationController');

const router = express.Router();


router.post('/admin/send/notification', protect, sendGlobalNotification)
router.post('/admin/send/notification/users', protect, sendNotificationToUsers)
router.get('/getallnotification', publicApiAccess, getAllNotifications)
router.get('/getsinglenotification/:id', publicApiAccess, getSingleNotification)
router.put('/admin/notification/markread/:notificationId', protect, publicApiAccess, markNotificationAsRead)

module.exports = router;