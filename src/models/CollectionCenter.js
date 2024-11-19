const mongoose = require('mongoose');

const collectionCenterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    address: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    operationalHours: {
        type: String,
        required: true
    },
    acceptedWasteTypes: [{
        type: String,
        enum: ['plastic', 'paper', 'metal', 'glass', 'electronic', 'organic']
    }]
}, {
    timestamps: true
});

collectionCenterSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('CollectionCenter', collectionCenterSchema); 