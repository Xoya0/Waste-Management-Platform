const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const contentController = require('../controllers/contentController');

router.post('/', auth, contentController.createContent);
router.get('/type', contentController.getContentByType);
router.get('/:id', contentController.getContentById);

module.exports = router; 