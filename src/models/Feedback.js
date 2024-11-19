const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['general', 'content', 'technical', 'suggestion'],
        default: 'general'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Feedback', feedbackSchema); 