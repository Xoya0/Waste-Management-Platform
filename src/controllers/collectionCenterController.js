const CollectionCenter = require('../models/CollectionCenter');

exports.createCenter = async (req, res) => {
    try {
        const center = new CollectionCenter(req.body);
        await center.save();
        res.status(201).send(center);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getNearestCenters = async (req, res) => {
    try {
        const { longitude, latitude, maxDistance = 10000 } = req.query;
        
        const centers = await CollectionCenter.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [parseFloat(longitude), parseFloat(latitude)]
                    },
                    $maxDistance: parseInt(maxDistance)
                }
            }
        }).limit(5);
        
        res.send(centers);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAllCenters = async (req, res) => {
    try {
        const centers = await CollectionCenter.find({});
        res.send(centers);
    } catch (error) {
        res.status(500).send(error);
    }
}; 