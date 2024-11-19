const twilio = require('twilio');
const config = require('../config/config');

const client = twilio(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);

const sendSMS = async (to, message) => {
    try {
        const response = await client.messages.create({
            body: message,
            from: config.TWILIO_PHONE_NUMBER,
            to: to
        });
        return response;
    } catch (error) {
        console.error('SMS sending failed:', error);
        throw error;
    }
};

module.exports = { sendSMS }; 