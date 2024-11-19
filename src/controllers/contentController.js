const Content = require('../models/Content');

exports.createContent = async (req, res) => {
    try {
        const content = new Content(req.body);
        await content.save();
        res.status(201).send(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getContentByType = async (req, res) => {
    try {
        const { type, language = 'en' } = req.query;
        const query = { language };
        if (type) query.type = type;
        
        const content = await Content.find(query);
        res.send(content);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getContentById = async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);
        if (!content) {
            return res.status(404).send();
        }
        res.send(content);
    } catch (error) {
        res.status(500).send(error);
    }
}; 