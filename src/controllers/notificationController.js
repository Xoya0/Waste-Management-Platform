const User = require('../models/User');
const { sendSMS } = require('../utils/smsService');

exports.sendBulkNotification = async (req, res) => {
    try {
        const { message } = req.body;
        const users = await User.find({ prefersSMS: true });
        
        const notifications = users.map(user => 
            sendSMS(user.phone, message)
        );
        
        await Promise.all(notifications);
        res.send({ message: 'Notifications sent successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.subscribeToNotifications = async (req, res) => {
    try {
        req.user.prefersSMS = true;
        await req.user.save();
        res.send({ message: 'Successfully subscribed to notifications' });
    } catch (error) {
        res.status(500).send(error);
    }
}; 