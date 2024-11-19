const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['article', 'video', 'guide'],
        required: true
    },
    content: {
        type: String,
        required: true
    },
    language: {
        type: String,
        default: 'en'
    },
    mediaUrl: String,
    tags: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('Content', contentSchema); 