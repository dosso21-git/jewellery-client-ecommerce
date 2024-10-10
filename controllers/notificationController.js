const Notification = require('../models/notifcationModel');
const User = require('../models/userModel');


const sendGlobalNotification = async (req, res) => {
    try {
        const { title, message } = req.body;

        const newNotification = new Notification({
            title,
            message,
            isGlobal: true,
        });

        await newNotification.save();

        const allUsers = await User.find();

        for (const user of allUsers) {
            user.notifications.push({
                notificationId: newNotification._id,
                isRead: false,
            });
            await user.save();
        }

        res.status(201).json({ message: 'Notification sent to all users', notification: newNotification });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send notification' });
    }
};

const markNotificationAsRead = async (req, res) => {
    try {
        const userId = req.user
        const { notificationId } = req.params;

        const user = await User.findById(userId);
        console.log("User:", user);

        const notification = user.notifications.find(n => n.notificationId.toString() === notificationId);

        if (notification) {
            notification.isRead = true;
            notification.readAt = new Date();
            await user.save();
            res.status(200).json({ message: 'Notification marked as read' });
        } else {
            res.status(404).json({ message: 'Notification not found for this user' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to mark notification as read' });
    }
};


module.exports = { sendGlobalNotification, markNotificationAsRead };