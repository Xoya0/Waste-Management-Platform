const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const notificationController = require('../controllers/notificationController');

router.post('/bulk', auth, notificationController.sendBulkNotification);
router.post('/subscribe', auth, notificationController.subscribeToNotifications);

module.exports = router; 